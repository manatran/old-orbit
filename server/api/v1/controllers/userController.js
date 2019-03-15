const request = require("request");
const models = require("./../models");

// Get current user
exports.current_user = (req, res, next) => {
  if (!req.user) {
    return res.status(404).json({ error: "User not found" });
  }
  // Fetch user data from GitHub
  request.get(
    `https://api.github.com/users/${req.user.username}`,
    {
      headers: {
        Accept: "application/json",
        "User-Agent": "Orbit"
      }
    },
    (error, response, body) => {
      const user = JSON.parse(body);
      res.json({ ...user, profile: req.user });
    }
  );
};

// Get user by username
exports.get_user = (req, res, next) => {
  const { username } = req.params;

  // Check for user in database
  models.User.findOne({
    where: { username: username },
    attributes: {
      exclude: ["accessToken"]
    }
  }).then(profile => {
    if (!profile) {
      return res.status(404).json({ error: "User not found" });
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
        const user = JSON.parse(body);
        res.json({ ...user, profile: profile });
      }
    );
  });
};

// Delete user
exports.delete_user = (req, res, next) => {
  if (!req.user) {
    return res.status(404).json({ error: "User not found" });
  }

  const { username } = req.user;
  models.User.findOne({ where: { username: username } }).then(user => {
    user
      .destroy()
      .then(success => {
        res.status(200).json({
          success: "User successfully deleted"
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
};
