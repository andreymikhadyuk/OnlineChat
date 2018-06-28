const passport = require('passport');
const authConfig = require('config').get('auth');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const AuthService = require('./auth');

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: authConfig.jwt.secret
  }, (jwtPayload, cb) => {
    cb(null, jwtPayload);
  }
));

passport.use('local-login', new LocalStrategy({
  passReqToCallback: true
}, async (req, username, password, done) => {
  try {
    const user = await AuthService.checkCredentials(username, password);
    done(null, user);
  } catch (err) {
    done(err);
  }
}));

passport.use('local-registration', new LocalStrategy({
  passReqToCallback: true
}, async (req, username, password, done) => {
  try {
    const newUser = await AuthService.signup(username, password);
    done(null, newUser);
  } catch (err) {
    done(err);
  }
}));