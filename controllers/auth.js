const passport = require('passport');
require('../services/passport');
const jwt = require('jsonwebtoken');

const ResponseService = require('../services/response');

const signup = (req, res, next) => {
  passport.authenticate('local-registration', { session: false }, (err, user) => {
    if (err || !user) {
      return ResponseService.sendError(res, err);
    }
    ResponseService.sendOk(res, { id: user._id });
  })(req, res, next);
};

module.exports = {
  signup,
};