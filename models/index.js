const connectDB = require('../db');
require('dotenv').config();

const setupModels = async() => {
    const authDB = await connectDB('auth', 'mongodb+srv://genexwebservices:pCcUI13H2luLFMS1@gws.mnjqqxb.mongodb.net/auth');
    const paymentDB = await connectDB('payment', 'mongodb+srv://genexwebservices:pCcUI13H2luLFMS1@gws.mnjqqxb.mongodb.net/pay');

     return {
        // auth models
        Log: authDB.model('Log', require('./Log')),
        Organization: authDB.model('Organization', require('./Org')),
        Product: authDB.model('Product', require('./Product')),
        Role: authDB.model('Role', require('./Role')),
        Tenant: authDB.model('Tenant', require('./Tenant')),
        User: authDB.model('User', require('./User')),
        
        // payment models
        Billing: paymentDB.model('Billing', require('./Billing')),
        Transaction: paymentDB.model('Transaction', require('./Transaction')),
        Settings: paymentDB.model('Settings', require('./Settings')),
    };
};

module.exports = setupModels;
