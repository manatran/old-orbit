const request = require("request");
const User = require("./../models/User");

exports.get_user = (req, res, next) => {
  const { username } = req.params;

  // Check for user in database
  User.findOne({ username: username }).then(user => {
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }

    // Fetch user data from GitHub
    request.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Accept: "application/json",
          "User-Agent": "Orbit"
        }
      },
      (error, response, body) => {
        const user = body;
        res.json(JSON.parse(body));
      }
    );
  });
};
