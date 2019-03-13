const express = require("express");
const router = express.Router();
const auth = require("./providers/auth")();

// Controllers
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");

// Routes
router.get("/hello", (req, res) => {
  res.send("general kenobi!");
});

router.get("/user", auth.authenticateJWT(), userController.current_user);
router.get("/user/:username", userController.get_user);

router.get("/github/callback", authController.github);

module.exports = router;
