const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/';

mongoose.connect(mongoUri);

const db = mongoose.connection;

db.once('connected', function() {
  console.log('Mongodb connected');
})

module.exports = db;