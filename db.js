// gws365-models/db.js
const mongoose = require('mongoose');

const connectDB = async (dbName, uri) => {
  if (!uri || typeof uri !== 'string') {
    throw new Error(`MongoDB URI is invalid for ${dbName}`);
  }

  const connection = await mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName
  });

  console.log(`✅ Connected to ${dbName} DB`);
  return connection;
};

module.exports = connectDB;
