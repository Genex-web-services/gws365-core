const mongoose = require('mongoose');

const transitionSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },  // Added productId
  planId: { type: String, required: true },  // string, not ObjectId as per your data
  billingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Billing' },
  paymentId: { type: String, required: true },  // Razorpay payment id  
  orderId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String },
  status: { type: String, default: 'pending' },
  method: { type: String },  // renamed from paymentMethod to method
  captured: { type: Boolean },
  rawResponse: { type: mongoose.Schema.Types.Mixed },
  paidAt: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = transitionSchema;
