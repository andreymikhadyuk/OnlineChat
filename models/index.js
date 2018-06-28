const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chat');

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Mongoose default connection error: ' + err);
});