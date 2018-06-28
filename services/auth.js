const jwt = require('jsonwebtoken');
const authConfig = require('config').get('auth');
const User = require('../models/user');

const EncoderService = require('./encoder');

const checkCredentials = (username, password) =>
  new Promise((resolve, reject) => {
    User.findOne({ username }, (err, user) => {
      if (err || !user) return reject();
      resolve(user);
    });
  })
  .then(user => {
    if (EncoderService.compareValueAndHash(password, user.password)) {
      return user;
    }
    throw new Error();
  });

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

const generateToken = (id) => {
  const payload = { id };
  const { prefix, secret } = authConfig.jwt;
  return `${prefix} ${jwt.sign(payload, secret)}`;
};

module.exports = {
  checkCredentials,
  signup,
  generateToken,
};