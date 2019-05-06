const models = require("./../models");

// Get subcomments by parent id
exports.get_subcomments = (req, res, next) => {
	const { id } = req.params;
	models.Subcomment.findAll({
		where: { parentCommentId: id },
		include: [
			{
				model: models.User,
				as: "author",
				attributes: {
					exclude: ["accessToken"]
				}
			}
		]
	})
		.then(subcomments => {
			res.status(200).json(subcomments);
		})
		.catch(err => {
			return res.status(401).json({ error: err });
		});
};

// Create subcomment
exports.create_subcomment = (req, res, next) => {
	const { id } = req.user;
	const { content, commentId } = req.body;

	if (!content || !commentId) {
		return res.status(400).json({
			error: "Subcomment must have content and parent comment"
		});
	}

	const args = {
		content: content,
		pinned: false,
		authorId: id,
		parentCommentId: commentId
	};

	models.Subcomment.create(args)
		.then(subcomment => {
			res.status(201).json(subcomment);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Delete subcomment
exports.delete_subcomment = (req, res, next) => {
	const { id } = req.params;
	models.Subcomment.findByPk(id)
		.then(subcomment => {
			subcomment
				.destroy()
				.then(success => {
					res.status(200).json({
						success: "Subcomment sucessfully deleted"
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
