const request = require("request");
const models = require("./../models");
const tokenUtils = require("./../utils/token");
const config = require("./../../../config/config");

// Signup user through GitHub
exports.github = (req, res, next) => {
  const { code } = req.query;

  if (!code) {
    return res.status(500).json({ error: "Could not get code" });
  }

  // POST code to GitHub to receive Access Token
  request.post(
    "https://github.com/login/oauth/access_token",
    {
      json: {
        client_id: config.github.client_id,
        client_secret: config.github.client_secret,
        code: code
      }
    },
    (error, response, body) => {
      const { access_token } = body;

      if (!access_token) {
        return res.status(500).json({ error: "Could not get access token" });
      }
      getUser(res, access_token);
    }
  );
};

// Fetch user from GitHub API
const getUser = (res, access_token) => {
  request.get(
    "https://api.github.com/user",
    {
      headers: {
        Authorization: `token ${access_token}`,
        Accept: "application/json",
        "User-Agent": "Orbit"
      }
    },
    (error, response, body) => {
      const user = JSON.parse(body);
      signinUser(res, access_token, user);
    }
  );
};

// Signin user
const signinUser = (res, access_token, user) => {
  // Check database for user
  models.User.findOne({ where: { username: user.login } }).then(dbuser => {
    if (dbuser) {
      // Return Bearer token
      const token = createToken(res, dbuser);
      return res.redirect(`/callback?token=${token}`);
    }

    // Create new user
    const args = {
      accessToken: access_token,
      username: user.login,
      isAdmin: false,
      reputation: 0
    };

    models.User.create(args)
      .then(user => {
        // Return Bearer token
        const token = createToken(res, args);
        return res.redirect(`/callback?token=${token}`);
      })
      .catch(err => {
        return res.status(500).json({ error: err });
      });
  });
};

// Return bearer token
const createToken = (res, user) => {
  const payload = {
    access_token: user.access_token,
    username: user.username
  };
  const token = tokenUtils.createToken(payload);
  return token;
};
