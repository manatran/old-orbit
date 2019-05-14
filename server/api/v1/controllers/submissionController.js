const models = require("./../models");

// Get submission by id
exports.get_submission = (req, res, next) => {
	const { id } = req.params;
	models.Submission.findByPk(id, {
		include: [
			{
				model: models.User,
				as: "author",
				attributes: {
					exclude: ["accessToken"]
				}
			},
			{
				model: models.Challenge,
				as: "contest"
			}
		]
	})
		.then(submission => {
			res.status(200).json(submission);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Get all submissions
exports.get_submissions = (req, res, next) => {
	models.Submission.findAll({
		include: [
			{
				model: models.User,
				as: "author",
				attributes: {
					exclude: ["accessToken"]
				}
			},
			{
				model: models.Challenge,
				as: "contest"
			}
		]
	})
		.then(submissions => {
			res.status(200).json(submissions);
		})
		.catch(err => {
			return res.status(401).json({ error: err });
		});
};

// Get submissions by author
exports.get_submissions_by_author = (req, res, next) => {
	const { authorId } = req.params;
	models.Submission.findAll({
		where: { authorId: authorId },
		include: [
			{
				model: models.User,
				as: "author",
				attributes: {
					exclude: ["accessToken"]
				}
			},
			{
				model: models.Challenge,
				as: "contest"
			}
		]
	})
		.then(submissions => {
			res.status(200).json(submissions);
		})
		.catch(err => {
			return res.status(401).json({ error: err });
		});
};

// Get recent submissions
exports.get_recent_submissions = (req, res, next) => {
	models.Submission.findAll({
		limit: 4,
		order: [["createdAt", "DESC"]],
		include: [
			{
				model: models.User,
				as: "author",
				attributes: {
					exclude: ["accessToken"]
				}
			},
			{
				model: models.Challenge,
				as: "contest"
			}
		]
	})
		.then(submissions => {
			res.status(200).json(submissions);
		})
		.catch(err => {
			return res.status(401).json({ error: err });
		});
};

// Get submission by month and year
exports.get_submissions_by_month_and_year = (req, res, next) => {
	const { month, year } = req.params;

	models.Challenge.findOne({
		where: {
			month: month,
			year: Number(year),
		},
	})
		.then(challenge => {
			if(challenge) {
				models.Submission.findAll({
					where: { contestId: challenge.id },
					include: [
						{
							model: models.User,
							as: "author",
							attributes: {
								exclude: ["accessToken"]
							}
						},
						{
							model: models.Challenge,
							as: "contest"
						}
					]
				})
				.then(submissions => {
					res.status(200).json(submissions);
				}).catch(err => {
					return res.status(200).json([]);
				})

			} else {
				res.satus(200).json([]);
			}
		})
		.catch(err => {
			return res.status(200).json([]);
		});
}

// Create submission
exports.create_submission = (req, res, next) => {
	const { id } = req.user;
	const { title, content, githubUrl, contestId, thumbnail } = req.body;

	if (!title || !content || !githubUrl || !contestId) {
		return res.status(400).json({
			error:
				"Submission must have title, content, github url, thumbnail and belongs to contest"
		});
	}

	const args = {
		title: title,
		content: content,
		githubUrl: githubUrl,
		thumbnail: thumbnail,
		authorId: id,
		contestId: contestId
	};

	models.Submission.create(args)
		.then(submission => {
			res.status(201).json(submission);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Like submission
exports.like_submission = (req, res, next) => {
	const { id } = req.params;
	// TODO
	// check if user has liked submission, then increment/decrement
};

// Update submission
exports.update_submission = (req, res, next) => {
	const { id } = req.params;
	const { title, content, githubUrl, thumbnail } = req.body;

	models.Submission.findByPk(id)
		.then(submission => {
			const fields = [];
			if (title) fields.push("title");
			if (content) fields.push("content");
			if (githubUrl) fields.push("githubUrl");
			if (thumbnail) fields.push("thumbnail");

			submission
				.update(
					{
						title: title,
						content: content,
						githubUrl: githubUrl,
						thumbnail: thumbnail
					},
					{ fields: fields }
				)
				.then(newSubmission => {
					res.status(202).json(newSubmission);
				})
				.catch(err => {
					return res.status(500).json({ error: err });
				});
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Delete submission
exports.delete_submission = (req, res, next) => {
	const { id } = req.params;
	models.Submission.findByPk(id)
		.then(submission => {
			submission
				.destroy()
				.then(success => {
					res.status(200).json({
						success: "Submission sucessfully deleted"
					});
				})
				.catch(err => {
					return res.status(500).json({ error: err });
				});
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};
