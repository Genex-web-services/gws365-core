const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Owner
  type: { type: String, enum: ['individual', 'organization'], required: true },
  productAccess: [{ type: String }],
  isActive: { type: Boolean, default: true },
  referredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User',default:'6841fb36dd9a2cc544c35a13' }, // referred by a user (optional)
}, {
  timestamps: true
});

// Pre-save hook to ensure 'admin' and 'pay' are always present in productAccess
tenantSchema.pre('save', function (next) {
  const requiredAccess = ['admincenter', 'genexpay'];
  this.productAccess = Array.from(new Set([...this.productAccess, ...requiredAccess]));
  next();
});

module.exports = tenantSchema;
