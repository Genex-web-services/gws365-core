const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  planId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  currentCycleStart: Date,
  currentCycleEnd: Date,
  amount: Number,
  status: { type: String, enum: ['pending', 'paid', 'overdue'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

module.exports = billingSchema;
