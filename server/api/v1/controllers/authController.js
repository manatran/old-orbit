const request = require("request");
const errorHandler = require("./../utils/errorHandler");
const config = require("./../../../config/config");

// Signup user through GitHub
exports.github = (req, res, next) => {
  const { code } = req.query;

  if (!code) {
    return errorHandler.handleAPIError(500, "Code not found", next);
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
        return errorHandler.handleAPIError(
          500,
          "Could not get access token",
          next
        );
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
      const user = body;
      registerUser(res, access_token, user);
    }
  );
};

// Register user
const registerUser = (res, acces_token, user) => {
  console.log("registering");
  /* TODO:
    1. Register user if does not yet exist
    2. Create JWT
  */
};
