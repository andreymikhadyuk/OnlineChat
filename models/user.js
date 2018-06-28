const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}, {
  versionKey: false
});

module.exports = mongoose.model('User', UserSchema);