module.exports = (db, DataTypes) => {
	const Post = db.define("post", {
		title: DataTypes.STRING,
		content: DataTypes.TEXT,
		pinned: DataTypes.BOOLEAN,
		totalLikes: DataTypes.INTEGER
	});

	// Relations
	Post.associate = models => {
		Post.belongsToMany(models.User, {
			through: "postLikes"
		});

		Post.belongsToMany(models.Tag, {
			through: "postTags"
		});

		Post.hasMany(models.Comment, {
			as: "comments"
		});

		Post.belongsTo(models.Category, {
			foreignKey: "subjectId",
			as: "subject"
		});

		Post.belongsTo(models.User, {
			foreignKey: "authorId",
			as: "author"
		});
	};

	return Post;
};
