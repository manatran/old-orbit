const models = require("./../models");

// Get category by id
exports.get_category = (req, res, next) => {
	const { slug } = req.params;
	models.Category.findOne({
		where: { slug: slug },
		include: [
			{
				model: models.Category,
				as: "parent"
			}
		]
	})
		.then(category => {
			res.json(category);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Get all categories
exports.get_categories = (req, res, next) => {
	models.Category.findAll({
		include: [
			{
				model: models.Category,
				as: "parent"
			}
		]
	})
		.then(categories => {
			res.json(categories);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Get popular categories
exports.get_popular_categories = (req, res, next) => {
	models.Category.findAll({
		limit: 5,
		order: [["subscribers", "DESC"]],
	})
		.then(categories => {
			res.json(categories);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
}

// Get all posts from category
exports.get_category_posts = (req, res, next) => {
	const { slug } = req.params;
	models.Category.findOne({
		where: { slug: slug }
	})
		.then(category => {
			models.Post.findAll({
				where: { subjectId: category.id },
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
			}).then(posts => {
				res.json(posts);
			}).catch(err => {
				return res.status(500).json({ error: err });
			});
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
}

// Create category
exports.create_category = (req, res, next) => {
	const { isAdmin } = req.user;
	const { name, slug, description, thumbnail, parent } = req.body;

	if (!isAdmin) {
		return res.status(401).json({
			error: "User is not authorized to create categories"
		});
	}

	if (!name || !slug || !description || !thumbnail) {
		return res.status(400).json({
			error: "Category must have both name, slug, description and thumbnail"
		});
	}

	console.log(parent)

	const args = {
		name: name,
		slug: slug,
		description: description,
		thumbnail: thumbnail,
		parentCategory: parent
	};

	models.Category.create(args)
		.then(category => {
			res.status(201).json(category);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Subscribe category
exports.subscribe_category = (req, res, next) => {
	const { id } = req.params;
	// TODO
	// check if user has subscribed to category, then increment/decrement
};

// Update category
exports.update_category = (req, res, next) => {
	const { id } = req.params;
	const { isAdmin } = req.user;
	const { name, description, thumbnail } = req.body;

	if (!isAdmin) {
		return res.status(401).json({
			error: "User is not authorized to update categories"
		});
	}

	models.Category.findByPk(id)
		.then(category => {
			const fields = [];
			if (name) fields.push("name");
			if (description) fields.push("description");
			if (thumbmail) fields.push("thumbmail");

			category
				.update(
					{ name: name, description: description, thumbmail: thumbnail },
					{ fields: fields }
				)
				.then(newCategory => {
					res.status(202).json(newCategory);
				})
				.catch(err => {
					return res.status(500).json({ error: err });
				});
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Delete category
exports.delete_category = (req, res, next) => {
	const { id } = req.params;
	const { isAdmin } = req.user;

	if (!isAdmin) {
		return res.status(401).json({
			error: "User is not authorized to delete categories"
		});
	}

	models.Category.findByPk(id)
		.then(category => {
			category
				.destroy()
				.then(success => {
					res.status(200).json({
						success: "Category sucessfully deleted"
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
