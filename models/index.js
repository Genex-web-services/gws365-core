// gws365-models/model/index.js
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('../db');

// Import Schemas
const LogSchema = require('./Log');
const OrgSchema = require('./Org');
const ProductSchema = require('./Product');
const RoleSchema = require('./Role');
const TenantSchema = require('./Tenant');
const UserSchema = require('./User');
const NotificationSchema = require('./Notification');

const BillingSchema = require('./Billing');
const TransactionSchema = require('./Transaction');
const SettingsSchema = require('./Settings');

// Connections
    const authDB = await connectDB('auth', 'mongodb+srv://gws:Tn12syN7JCpPxNKQ@gws.mnjqqxb.mongodb.net/auth');
    const paymentDB = await connectDB('payment', 'mongodb+srv://gws:Tn12syN7JCpPxNKQ@gws.mnjqqxb.mongodb.net/pay');

// Directly export models
module.exports = {
  // Auth DB Models
  Log: authDB.model('Log', LogSchema),
  Organization: authDB.model('Organization', OrgSchema),
  Product: authDB.model('Product', ProductSchema),
  Role: authDB.model('Role', RoleSchema),
  Tenant: authDB.model('Tenant', TenantSchema),
  User: authDB.model('User', UserSchema),
  Notification: authDB.model('Notification', NotificationSchema),

  // Payment DB Models
  Billing: paymentDB.model('Billing', BillingSchema),
  Transaction: paymentDB.model('Transaction', TransactionSchema),
  Settings: paymentDB.model('Settings', SettingsSchema),
};
