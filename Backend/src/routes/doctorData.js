const express = require('express');
const fs = require('fs');
const path = require('path');
const { Resend } = require('resend');
const DoctorData = require('../models/DoctorData');
const { getDoctorDossierEmail, getAdminNotificationEmail } = require('../utils/emailTemplates');

const router = express.Router();

const getResendClient = () => {
  if (process.env.RESEND_API_KEY) {
    return new Resend(process.env.RESEND_API_KEY);
  }
  return null;
};

const requiredFields = ['fullName', 'email', 'phone', 'address', 'specialization'];
const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => ({
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
    const cleanFileName = fileName.trim();
    const cleanProductTitle = productTitle.trim();
    const download = {
      productId: productId.trim(),
      productTitle: cleanProductTitle,
      fileName: cleanFileName,
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

    // Upsert doctor profile in MongoDB DOCTORS_DATA collection
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
      { returnDocument: 'after', upsert: true, runValidators: true, setDefaultsOnInsert: true }
    );

    console.log(`[DoctorData] Saved download record for Dr. ${doctor.fullName} (${doctor.email}) - Product: ${cleanProductTitle}`);

    // Check for document file on disk to attach to the email
    const attachments = [];
    const potentialPaths = [
      path.join(__dirname, '../../public/pdf', cleanFileName),
      path.join(__dirname, '../../../Frontend/public/pdf', cleanFileName),
      path.join(process.cwd(), 'public/pdf', cleanFileName)
    ];

    for (const filePath of potentialPaths) {
      if (fs.existsSync(filePath)) {
        try {
          const fileBuffer = fs.readFileSync(filePath);
          attachments.push({
            filename: cleanFileName,
            content: fileBuffer
          });
          console.log(`[DoctorData] Attached clinical document (${(fileBuffer.length / 1024).toFixed(1)} KB): ${cleanFileName}`);
          break;
        } catch (readErr) {
          console.warn(`[DoctorData] Could not read attachment at ${filePath}:`, readErr.message);
        }
      }
    }

    // Attach official brand logo inline (both camelCase contentId and snake_case content_id)
    const logoPaths = [
      path.join(__dirname, '../../public/logo-email.png'),
      path.join(__dirname, '../../../Frontend/public/logo-email.png'),
      path.join(process.cwd(), 'public/logo-email.png')
    ];
    for (const lp of logoPaths) {
      if (fs.existsSync(lp)) {
        try {
          const logoBuffer = fs.readFileSync(lp);
          attachments.push({
            filename: 'logo-email.png',
            content: logoBuffer,
            contentId: 'varuta-logo',
            content_id: 'varuta-logo'
          });
          break;
        } catch (e) {
          console.warn('[DoctorData] Could not read logo:', e.message);
        }
      }
    }

    const resend = getResendClient();
    const isDevelopment = (process.env.NODE_ENV || 'development') === 'development';

    if (!resend || !process.env.MAIL_FROM || !process.env.ADMIN_EMAIL) {
      const msg = 'Doctor download saved, but mail delivery (RESEND_API_KEY/MAIL_FROM) is not configured.';
      console.warn(`[DoctorData] ${msg}`);
      if (!isDevelopment) {
        return res.status(503).json({ message: 'Your details were saved, but the notification service is not configured. Please contact support.' });
      }
      return res.status(201).json({ id: doctor._id, warning: msg });
    }

    const clientUrl = process.env.CLIENT_URL || 'https://varutapharmaceuticals.com';
    const backendUrl = process.env.BACKEND_URL || 'https://varuta-pharmaceuticals.onrender.com';

    // Doctor Confirmation Email (Clean, simple, professional, with logo & attachment)
    const doctorEmailOptions = {
      from: process.env.MAIL_FROM,
      to: [doctor.email],
      subject: `Clinical Dossier: ${cleanProductTitle} - Varuta Pharma`,
      html: getDoctorDossierEmail({
        doctorName: doctor.fullName,
        productTitle: cleanProductTitle,
        fileName: cleanFileName,
        fileUrl: download.fileUrl,
        clientUrl,
        backendUrl,
        downloadedAt: download.downloadedAt
      })
    };

    if (attachments.length > 0) {
      doctorEmailOptions.attachments = attachments;
    }

    // Admin Notification Alert Email
    const adminEmailOptions = {
      from: process.env.MAIL_FROM,
      to: [process.env.ADMIN_EMAIL],
      subject: `[New Doctor Download] Dr. ${doctor.fullName} - ${cleanProductTitle}`,
      html: getAdminNotificationEmail({
        doctor,
        productTitle: cleanProductTitle,
        fileName: cleanFileName,
        fileUrl: download.fileUrl,
        clientUrl,
        downloadedAt: download.downloadedAt
      })
    };

    try {
      const [adminEmailResult, doctorEmailResult] = await Promise.all([
        resend.emails.send(adminEmailOptions),
        resend.emails.send(doctorEmailOptions)
      ]);

      if (adminEmailResult.error || doctorEmailResult.error) {
        console.error('[DoctorData] Resend email delivery issue:', {
          adminError: adminEmailResult.error,
          doctorError: doctorEmailResult.error
        });
        if (!isDevelopment) {
          return res.status(502).json({ message: 'Your details were saved, but the notification email could not be sent. Please try again.' });
        }
      } else {
        console.log(`[DoctorData] Notification emails sent to Dr. ${doctor.email} and Admin ${process.env.ADMIN_EMAIL}`);
      }
    } catch (mailError) {
      console.error('[DoctorData] Error executing Resend email dispatch:', mailError.message);
      if (!isDevelopment) {
        return res.status(502).json({ message: 'Your details were saved, but the notification email could not be sent. Please try again.' });
      }
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
