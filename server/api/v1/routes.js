const express = require("express");
const router = express.Router();
const auth = require("./providers/auth")();

// Controllers
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");
const postController = require("./controllers/postController");
const categoryController = require("./controllers/categoryController");

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

// Auth routes
router.get("/github/callback", authController.github);

// User routes
router.get("/user", auth.authenticateJWT(), userController.current_user);
router.delete("/user", auth.authenticateJWT(), userController.delete_user);
router.get("/user/:username", userController.get_user);

// Post routes
router.get("/posts", postController.get_posts);
router.post("/posts", auth.authenticateJWT(), postController.create_post);
router.get("/posts/:id", postController.get_post);
router.patch("/posts/:id", auth.authenticateJWT(), postController.update_post);
router.delete("/posts/:id", auth.authenticateJWT(), postController.delete_post);

// Category routes
router.get("/categories", categoryController.get_categories);
router.post(
  "/categories",
  auth.authenticateJWT(),
  categoryController.create_category
);
router.get("/categories/:id", categoryController.get_category);
router.patch(
  "/categories/:id",
  auth.authenticateJWT(),
  categoryController.update_category
);
router.delete(
  "/categories/:id",
  auth.authenticateJWT(),
  categoryController.delete_category
);

module.exports = router;
