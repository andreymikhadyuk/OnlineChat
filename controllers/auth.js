const passport = require('passport');
require('../services/passport');

const AuthService = require('../services/auth');
const ResponseService = require('../services/response');

const login = (req, res, next) => {
  passport.authenticate('local-login', { session: false }, (err, user) => {
    if (err || !user) {
      return ResponseService.sendError(res, err || {});
    }
    ResponseService.sendOk(res, { token: AuthService.generateToken(user._id) });
  })(req, res, next);
};

const signup = (req, res, next) => {
  passport.authenticate('local-registration', { session: false }, (err, user) => {
    if (err || !user) {
      return ResponseService.sendError(res, err || {});
    }
    ResponseService.sendOk(res, { id: user._id });
  })(req, res, next);
};

const checkAuthorization = (req, res, next) => {
  passport.authenticate('jwt', { session: false })(req, res, next);
};

module.exports = {
  login,
  signup,
  checkAuthorization,
};