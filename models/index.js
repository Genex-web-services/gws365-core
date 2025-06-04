const connectDB = require('../db');
require('dotenv').config();

const setupModels = async() => {
    const authDB = await connectDB('auth', 'mongodb+srv://genexwebservices:Up7pmiQwuWUaCs7X@gws.mnjqqxb.mongodb.net/auth');
    const paymentDB = await connectDB('payment', 'mongodb+srv://genexwebservices:Up7pmiQwuWUaCs7X@gws.mnjqqxb.mongodb.net/pay');

     return {
        Log: authDB.model('Log', require('./Log')),
        Product: authDB.model('Product', require('./Product')),
        Role: authDB.model('Role', require('./Role')),
        Tenant: authDB.model('Tenant', require('./Tenant')),
        User: authDB.model('User', require('./User')),
    };
};

module.exports = setupModels;
