// gws365-models/db.js
const mongoose = require('mongoose');

const connections = {};

const connectDB = (name, uri) => {
  if (connections[name]) return connections[name];

  const conn = mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connections[name] = conn;
  console.log(`✅ Connected to ${connections[name]} DB`);
  return conn;
};

module.exports = connectDB;
