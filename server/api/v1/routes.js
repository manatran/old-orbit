const express = require("express");
const router = express.Router();

// Controllers
const authController = require("./controllers/authController");

// Routes
router.get("/hello", (req, res) => {
  res.send("general kenobi!");
});

router.get("/github/callback", authController.github);

module.exports = router;
