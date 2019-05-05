module.exports = (db, DataTypes) => {
	const Comment = db.define("comment", {
		content: DataTypes.STRING,
		pinned: DataTypes.BOOLEAN
	});

	// Relations
	Comment.associate = models => {
		Comment.belongsToMany(models.User, {
			through: "commentLikes"
		});

		Comment.belongsTo(models.Post, {
			foreignKey: "postId",
			as: "post"
		});

		Comment.belongsTo(models.User, {
			foreignKey: "authorId",
			as: "author"
		});
	};

	return Comment;
};
