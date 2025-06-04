const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },

  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' },

  userType: { type: String, enum: ['single', 'org'], default: 'single' },
  isActive: { type: Boolean, default: true },

  roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' , default: '683db81105cf2e7f18920745'  },
  resetToken: { type: String },
    resetTokenExpiry: { type: Date },
}, {
  timestamps: true
});

// Hash password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password
userSchema.methods.comparePassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = userSchema;
