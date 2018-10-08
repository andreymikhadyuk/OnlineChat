const bcrypt = require('bcrypt');

const generateHash = (value, saltLength = 10) => {
  return bcrypt.hashSync(value, bcrypt.genSaltSync(saltLength), null);
};

const compareValueAndHash = (value, hash) => {
  return bcrypt.compareSync(value, hash);
};

module.exports = {
  generateHash,
  compareValueAndHash,
};