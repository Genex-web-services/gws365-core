// models/notificationSchema.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional
  title: { type: String, required: true },
  message: { type: String },
  fileUrl: { type: String }, // if any file attachment
  expireAt: { type: Date }, // auto-expiry logic can be added
  level: { type: String, enum: ['low', 'middle', 'priority'], default: 'low' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = notificationSchema;
