const express = require("express");
const router = express.Router();
const auth = require("./providers/auth")();

// Controllers
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");
const postController = require("./controllers/postController");
const submissionController = require("./controllers/submissionController");
const categoryController = require("./controllers/categoryController");
const tagController = require("./controllers/tagController");
const challengeController = require("./controllers/challengeController");
const commentController = require("./controllers/commentController");
const subcommentController = require("./controllers/subcommentController");
const reportController = require("./controllers/reportController");
const revisionController = require("./controllers/revisionController");

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
router.get("/posts/recent", postController.get_recent_posts);
router.get("/posts/author/:authorId", postController.get_posts_by_author);
router.post("/posts", auth.authenticateJWT(), postController.create_post);
router.get("/post/:id", postController.get_post);
router.patch("/posts/:id", auth.authenticateJWT(), postController.update_post);
router.delete("/posts/:id", auth.authenticateJWT(), postController.delete_post);

// Submission routes
router.get("/submissions", submissionController.get_submissions);
router.get("/submissions/recent", submissionController.get_recent_submissions);
router.get(
	"/submissions/author/:authorId",
	submissionController.get_submissions_by_author
);
router.post(
	"/submissions",
	auth.authenticateJWT(),
	submissionController.create_submission
);
router.get("/submission/:id", submissionController.get_submission);
router.patch(
	"/submissions/:id",
	auth.authenticateJWT(),
	submissionController.update_submission
);
router.delete(
	"/submissions/:id",
	auth.authenticateJWT(),
	submissionController.delete_submission
);

// Category routes
router.get("/categories", categoryController.get_categories);
router.post(
	"/categories",
	auth.authenticateJWT(),
	categoryController.create_category
);
router.get("/categories/:slug", categoryController.get_category);
router.get("/category/popular", categoryController.get_popular_categories);
router.get("/category/posts/:slug", categoryController.get_category_posts);
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

// Tag routes
router.get("/tags", tagController.get_tags);
router.post("/tags", auth.authenticateJWT(), tagController.create_tag);
router.get("/tags/:id", tagController.get_tag);
router.patch("/tags/:id", auth.authenticateJWT(), tagController.update_tag);
router.delete("/tags/:id", auth.authenticateJWT(), tagController.delete_tag);

// Challenge routes
router.get("/challenges", challengeController.get_challenges);
router.post(
	"/challenges",
	auth.authenticateJWT(),
	challengeController.create_challenge
);
router.get("/challenges/:id", challengeController.get_challenge);
router.patch(
	"/challenges/:id",
	auth.authenticateJWT(),
	challengeController.update_challenge
);
router.delete(
	"/challenges/:id",
	auth.authenticateJWT(),
	challengeController.delete_challenge
);

// Comment routes
router.get("/comments/:id", commentController.get_comment);
router.get(
	"/comments/author/:authorId",
	commentController.get_comments_by_author
);
router.post(
	"/comments",
	auth.authenticateJWT(),
	commentController.create_comment
);

router.delete(
	"/comments/:id",
	auth.authenticateJWT(),
	commentController.delete_comment
);

// Subcomment routes
router.get("/subcomments", subcommentController.get_subcomments);
router.post(
	"/subcomments",
	auth.authenticateJWT(),
	subcommentController.create_subcomment
);
router.get("/subcomments/:id", subcommentController.get_subcomment);
router.delete(
	"/subcomments/:id",
	auth.authenticateJWT(),
	subcommentController.delete_subcomment
);

// Report routes
router.get("/reports", auth.authenticateJWT(), reportController.get_reports);
router.post("/reports", auth.authenticateJWT(), reportController.create_report);
router.get("/reports/:id", auth.authenticateJWT(), reportController.get_report);
router.delete(
	"/reports/:id",
	auth.authenticateJWT(),
	reportController.delete_report
);

// Revision routes
router.get("/revisions", revisionController.get_revisions);
router.post(
	"/revisions",
	auth.authenticateJWT(),
	revisionController.create_revision
);
router.get("/revisions/:id", revisionController.get_revision);
router.patch(
	"/revisions/:id",
	auth.authenticateJWT(),
	revisionController.update_revision
);
router.delete(
	"/revisions/:id",
	auth.authenticateJWT(),
	revisionController.delete_revision
);

module.exports = router;
