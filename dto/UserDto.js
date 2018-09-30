const omit = require('lodash/omit');

const convertToDto = (user = {}) => omit(user, ['password', 'createdAt']);

module.exports = {
  convertToDto,
};
