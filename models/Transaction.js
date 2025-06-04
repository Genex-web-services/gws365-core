const mongoose = require('mongoose');

const transitionSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  planId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: true },
  billingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Billing' },
  transactionId: String,
  amount: Number,
  status: { type: String, enum: ['success', 'failed', 'pending'], default: 'pending' },
  paymentMethod: String,
  paidAt: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = transitionSchema
