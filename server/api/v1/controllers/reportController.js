const models = require("../models");

// Get report by id
exports.get_report = (req, res, next) => {
	const { id } = req.params;
	const { isAdmin } = req.user;

	if (!isAdmin) {
		return res
			.status(401)
			.json({ error: "User is not authorized to view reports" });
	}

	models.Report.findByPk(id)
		.then(report => {
			res.json(report);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Get all reports
exports.get_reports = (req, res, next) => {
	const { isAdmin } = req.user;

	if (!isAdmin) {
		return res
			.status(401)
			.json({ error: "User is not authorized to view reports" });
	}

	models.Report.findAll({
		where: { resolvedById: null },
		include: [
			{
				model: models.Post,
				as: "parentPost",
				include: [
					{
						model: models.User,
						as: "author",
						attributes: {
							exclude: ["accessToken"]
						}
					},
					{
						model: models.Category,
						as: "subject"
					}
				]
			}
		]
	})
		.then(reports => {
			res.json(reports);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Create report
exports.create_report = (req, res, next) => {
	const { id } = req.user;
	const { content, postId } = req.body;

	if (!content || !postId) {
		return res.status(400).json({
			error: "Report must have both content and belong to post"
		});
	}

	const args = {
		content: content,
		parentPostId: postId,
		authorId: id
	};

	models.Report.create(args)
		.then(report => {
			res.status(201).json(report);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Update report
exports.update_report = (req, res, next) => {
	const { id } = req.params;
	const { isAdmin } = req.user;
	const adminId = req.user.id;

	if (!isAdmin) {
		return res
			.status(401)
			.json({ error: "User is not authorized to update reports" });
	}

	models.Report.findByPk(id)
		.then(report => {
			const fields = ["resolvedById"];
			report
				.update({ resolvedById: adminId }, { fields: fields })
				.then(newReport => {
					res.status(202).json(newReport);
				})
				.catch(err => {
					return res.status(500).json({ error: err });
				});
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Delete report
exports.delete_report = (req, res, next) => {
	const { id } = req.params;
	const { isAdmin } = req.user;

	if (!isAdmin) {
		return res
			.status(401)
			.json({ error: "User is not authorized to update reports" });
	}

	models.Report.findByPk(id)
		.then(report => {
			report
				.destroy()
				.then(success => {
					res.status(200).json({ success: "Report succesfully deleted" });
				})
				.catch(err => {
					return res.status(500).json({ error: err });
				});
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};
