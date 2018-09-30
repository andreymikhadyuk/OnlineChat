const User = require('../models/user');

const findById = id =>
  new Promise((resolve, reject) => {
    User.findById(id, (err, user) => {
      if (err) return reject(err);
      resolve(user);
    });
  });

module.exports = {
  findById,
};