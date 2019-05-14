const models = require("../models");
const Op = require("sequelize").Op;

// Search
exports.search = (req, res, next) => {
  let { param } = req.params;
  param = param.toLowerCase();

	let submissions = [];
	let posts = [];

	// Search submissions
	models.Submission.findAll({
		where: { title: {
      [Op.iLike]: `%${param}%`
		}},
		limit: 50,
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
	.then(submissionsRes => {
		submissions = submissionsRes;
		// Search posts
		models.Post.findAll({
      where: { title: {
        [Op.iLike]: `%${param}%`
      }},
			limit: 5,
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
		})
		.then(postsRes => {
			posts = postsRes;
			res.json({
				submissions, submissions,
				posts: posts
			})
		})
		.catch(err => {
			posts = [];
		});
	})
	.catch(err => {
		submissions = [];
	});

}
