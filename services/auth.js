const User = require('../models/user');

const EncoderService = require('./encoder');

const signup = (username, password) =>
  new Promise((resolve, reject) => {
    const user = new User({
      username,
      password: EncoderService.generateHash(password)
    });
    user.save((err, newUser) => {
      if (err) return reject(err);
      resolve(newUser);
    });
  });

module.exports = {
  signup,
};