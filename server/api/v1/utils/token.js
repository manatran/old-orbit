const config = require("./../../../config/config");
const jwt = require("jsonwebtoken");

module.exports = {
  createToken: payload => {
    return jwt.sign(payload, config.auth.jwtSecret, { expiresIn: 604800 });
  },
  generateToken: (req, res, next) => {
    req.token = createToken(req.auth);
    return next();
  },
  getToken: headers => {
    if (headers && headers.authorization) {
      const parted = headers.authorization.split(" ");
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  },
  sendToken: (req, res) => {
    res.setHeader("x-auth-token", req.token);
    return res.status(200).send(JSON.stringify(req.user));
  }
};
