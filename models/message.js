const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  userId: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Number },
}, {
  versionKey: false
});

module.exports = mongoose.model('Message', MessageSchema);