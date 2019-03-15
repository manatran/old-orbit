const express = require("express");
const router = express.Router();
const auth = require("./providers/auth")();

// Controllers
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");

// Routes
router.get("/author", (req, res) => {
  res.json({
    name: "Manaus Transez",
    website: "https://manatran.github.io",
    twitter: "https://twitter.com/manaus_t",
    github: "https://github.com/manatran",
    linkedin: "https://linkedin.com/in/manaustransez/"
  });
});

router.get("/user", auth.authenticateJWT(), userController.current_user);
router.delete("/user", auth.authenticateJWT(), userController.delete_user);
router.get("/user/:username", userController.get_user);

router.get("/github/callback", authController.github);

module.exports = router;
