const passport = require("passport");
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;

// Models
const models = require("./../models");

// Configuration
const config = require("./../../../config/config");
const jwtOptions = {
  secretOrKey: config.auth.jwtSecret,
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
};

module.exports = () => {
  // JWT Strategy
  const jwtStrategy = new passportJWT.Strategy(
    jwtOptions,
    (jwt_payload, done) => {
      const username = jwt_payload.username;
      models.User.findOne({ where: { username: username } })
        .then(user => {
          if (!user) return done(null, false);
          return done(null, user);
        })
        .catch(err => {
          if (err) return done(err);
        });
    }
  );
  passport.use(jwtStrategy);

  // Serialization
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // Deserialization
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticateJWT: () => {
      return passport.authenticate("jwt", { session: false });
    }
  };
};
