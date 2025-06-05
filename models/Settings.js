const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  emailReminders: {
    dates: [Number], // e.g., [25, 28, 30, 5]
    enabled: { type: Boolean, default: true }
  },
  gracePeriodDays: { type: Number, default: 5 },
  lateFee: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = settingSchema;
