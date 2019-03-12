const config = require("./../../../config/config");
const jwt = require("jsonwebtoken");

module.exports = {
  createToken: auth => {
    return jwt.sign({ id: auth.id }, config.auth.jwtSecret);
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
