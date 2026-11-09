const express = require('express');
const { Resend } = require('resend');
const DoctorData = require('../models/DoctorData');

const router = express.Router();
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const requiredFields = ['fullName', 'email', 'phone', 'address', 'specialization'];
const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));

router.post('/downloads', async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      address,
      specialization,
      consentGiven,
      productId,
      productTitle,
      fileName,
      fileUrl
    } = req.body;

    if (
      requiredFields.some((field) => typeof req.body[field] !== 'string' || !req.body[field].trim()) ||
      typeof consentGiven !== 'boolean' ||
      !consentGiven ||
      [productId, productTitle, fileName, fileUrl].some((field) => typeof field !== 'string' || !field.trim())
    ) {
      return res.status(400).json({ message: 'All required doctor and document details must be provided.' });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const download = {
      productId: productId.trim(),
      productTitle: productTitle.trim(),
      fileName: fileName.trim(),
      fileUrl: fileUrl.trim(),
      downloadedAt: new Date()
    };
    const safeDoctor = {
      fullName: escapeHtml(fullName.trim()),
      email: escapeHtml(normalizedEmail),
      phone: escapeHtml(phone.trim()),
      address: escapeHtml(address.trim()),
      specialization: escapeHtml(specialization.trim())
    };
    const safeProductTitle = escapeHtml(productTitle.trim());
    const safeFileName = escapeHtml(fileName.trim());

    const doctor = await DoctorData.findOneAndUpdate(
      { email: normalizedEmail },
      {
        $set: {
          fullName: fullName.trim(),
          phone: phone.trim(),
          address: address.trim(),
          specialization: specialization.trim(),
          consentGiven: true
        },
        $push: { downloadedDocuments: download }
      },
      { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
    );

    if (!resend || !process.env.MAIL_FROM || !process.env.ADMIN_EMAIL) {
      console.error('Doctor download saved, but mail delivery is not configured.');
      return res.status(503).json({ message: 'Your details were saved, but the notification service is not configured. Please contact support.' });
    }

    const emailDetails = {
      from: process.env.MAIL_FROM,
      to: [process.env.ADMIN_EMAIL],
      subject: `New doctor dossier download: ${doctor.fullName}`,
      html: `
        <h2>New clinical dossier download</h2>
        <p>A doctor submitted their details and downloaded a clinical document.</p>
        <ul>
          <li><strong>Name:</strong> ${safeDoctor.fullName}</li>
          <li><strong>Email:</strong> ${safeDoctor.email}</li>
          <li><strong>Phone:</strong> ${safeDoctor.phone}</li>
          <li><strong>Address:</strong> ${safeDoctor.address}</li>
          <li><strong>Specialization:</strong> ${safeDoctor.specialization}</li>
          <li><strong>Product:</strong> ${safeProductTitle}</li>
          <li><strong>Document:</strong> ${safeFileName}</li>
          <li><strong>Downloaded at:</strong> ${download.downloadedAt.toISOString()}</li>
        </ul>
      `
    };

    const doctorConfirmation = {
      from: process.env.MAIL_FROM,
      to: [doctor.email],
      subject: `Your Varuta clinical dossier: ${productTitle.trim()}`,
      html: `
        <p>Dear ${safeDoctor.fullName},</p>
        <p>Your clinical dossier download for <strong>${safeProductTitle}</strong> was recorded successfully.</p>
        <p>Document: <strong>${safeFileName}</strong></p>
        <p>Thank you for your interest in Varuta Pharma.</p>
      `
    };

    const [adminEmailResult, doctorEmailResult] = await Promise.all([
      resend.emails.send(emailDetails),
      resend.emails.send(doctorConfirmation)
    ]);

    if (adminEmailResult.error || doctorEmailResult.error) {
      console.error('Doctor download saved, but one or more notification emails failed:', {
        adminError: adminEmailResult.error,
        doctorError: doctorEmailResult.error
      });
      return res.status(502).json({ message: 'Your details were saved, but the notification email could not be sent. Please try again.' });
    }

    res.status(201).json({ id: doctor._id });
  } catch (error) {
    console.error('Unable to save doctor document download:', error);
    res.status(500).json({ message: 'Unable to save your details. Please try again.' });
  }
});

router.get('/export.csv', async (req, res) => {
  const expectedToken = process.env.ADMIN_EXPORT_TOKEN;
  const authorization = req.get('authorization') || '';

  if (!expectedToken || authorization !== `Bearer ${expectedToken}`) {
    return res.status(401).json({ message: 'Unauthorized.' });
  }

  try {
    const doctors = await DoctorData.find().sort({ createdAt: -1 }).lean();
    const rows = [
      ['Full Name', 'Email', 'Phone', 'Address', 'Specialization', 'Consent Given', 'Downloaded Documents', 'Created At', 'Updated At'],
      ...doctors.map((doctor) => [
        doctor.fullName,
        doctor.email,
        doctor.phone,
        doctor.address,
        doctor.specialization,
        doctor.consentGiven ? 'Yes' : 'No',
        doctor.downloadedDocuments
          .map((document) => `${document.productTitle} - ${document.fileName} - ${new Date(document.downloadedAt).toISOString()}`)
          .join('; '),
        doctor.createdAt.toISOString(),
        doctor.updatedAt.toISOString()
      ])
    ];
    const csv = rows
      .map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(','))
      .join('\r\n');

    res
      .type('text/csv')
      .set('Content-Disposition', 'attachment; filename="doctors-data.csv"')
      .send(csv);
  } catch (error) {
    console.error('Unable to export doctor data:', error);
    res.status(500).json({ message: 'Unable to export doctor data.' });
  }
});

module.exports = router;
