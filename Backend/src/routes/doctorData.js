const express = require('express');
const DoctorData = require('../models/DoctorData');

const router = express.Router();

const requiredFields = ['fullName', 'email', 'phone', 'address', 'specialization'];

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
