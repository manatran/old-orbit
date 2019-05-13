const models = require("./../models");
const misc = require("../utils/misc");

// Get challenge by id
exports.get_challenge = (req, res, next) => {
	const { id } = req.params;
	models.Challenge.findByPk(id)
		.then(challenge => {
			res.json(challenge);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Get current challenge
exports.get_current_challenge = (req, res, next) => {
	models.Challenge.findOne({
		where: {
			year: misc.currentYear(),
			month: misc.currentMonth()
		}
	})
	.then(challenge => {
		res.json(challenge);
	})
	.catch(err => {
		return res.status(500).json({ error: err });
	})
}

// Get all challenges
exports.get_challenges = (req, res, next) => {
	models.Challenge.findAll()
		.then(challenges => {
			res.json(challenges);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Create challenge
exports.create_challenge = (req, res, next) => {
	const { isAdmin } = req.user;
	const { title, description, month, year } = req.body;

	if (!isAdmin) {
		return res.status(401).json({
			error: "User is not authorized to create challenges"
		});
	}

	if (!title || !description || !month || !year) {
		return res.status(400).json({
			error: "Challenge must have both title, description and date"
		});
	}

	const args = {
		title: title,
		description: description,
		month: month,
		year: year
	};

	models.Challenge.create(args)
		.then(challenge => {
			res.status(201).json(challenge);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Update challenge
exports.update_challenge = (req, res, next) => {
	const { id } = req.params;
	const { isAdmin } = req.user;
	const { title, description, month, year } = req.body;

	if (!isAdmin) {
		return res.status(401).json({
			error: "User is not authorized to update challenges"
		});
	}

	models.Challenge.findByPk(id)
		.then(challenge => {
			const fields = [];
			if (title) fields.push("title");
			if (description) fields.push("description");
			if (month) fields.push("month");
			if (year) fields.push("year");

			challenge
				.update(
					{ title: title, description: description, month: month, year: year },
					{ fields: fields }
				)
				.then(newChallenge => {
					res.status(202).json(newChallenge);
				})
				.catch(err => {
					return res.status(500).json({ error: err });
				});
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Delete challenge
exports.delete_challenge = (req, res, next) => {
	const { id } = req.params;
	const { isAdmin } = req.user;

	if (!isAdmin) {
		return res.status(401).json({
			error: "User is not authorized to delete challenges"
		});
	}

	models.Challenge.findByPk(id)
		.then(challenge => {
			challenge
				.destroy()
				.then(success => {
					res.status(200).json({
						success: "Challenge sucessfully deleted"
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
