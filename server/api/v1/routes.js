const express = require("express");
const router = express.Router();

// Controllers
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");

// Routes
router.get("/hello", (req, res) => {
  res.send("general kenobi!");
});

router.get("/user/:username", userController.get_user);
router.post("/user", userController.create_user);

router.get("/github/callback", authController.github);

module.exports = router;
