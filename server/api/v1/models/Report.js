module.exports = (db, DataTypes) => {
	const Report = db.define("report", {
		content: DataTypes.TEXT
	});

	// Relations
	Report.associate = models => {
		Report.belongsToMany(models.Tag, {
			through: "reportTags"
		});

		Report.belongsTo(models.Post, {
			foreignKey: "parentPostId",
			as: "parentPost"
		});

		Report.belongsTo(models.User, {
			foreignKey: "authorId",
			as: "author"
		});

		Report.belongsTo(models.User, {
			foreignKey: "resolvedById",
			as: "resolvedBy"
		});
	};

	return Report;
};
