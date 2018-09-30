const UserService = require('../services/UserService');
const ResponseService = require('../services/response');

const getCurrentUserData = (req, res) => {
  if (!req.user) return ResponseService.sendUnauthorized(res);
  UserService.findById(req.user.id)
    .then(user =>  ResponseService.sendOk(res, { user }))
    .catch(() => ResponseService.sendError(res));
};

module.exports = {
  getCurrentUserData,
};