const mongoose = require('mongoose');

const downloadedDocumentSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    productTitle: { type: String, required: true },
    fileName: { type: String, required: true },
    fileUrl: { type: String, required: true },
    downloadedAt: { type: Date, default: Date.now }
  },
  { _id: false }
);

const doctorDataSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    specialization: { type: String, required: true, trim: true },
    consentGiven: { type: Boolean, required: true },
    downloadedDocuments: { type: [downloadedDocumentSchema], default: [] }
  },
  { timestamps: true, collection: 'DOCTORS_DATA' }
);

doctorDataSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('DoctorData', doctorDataSchema);
