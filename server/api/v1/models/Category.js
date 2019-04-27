module.exports = (db, DataTypes) => {
	const Category = db.define("category", {
		name: DataTypes.STRING,
		slug: {
			type: DataTypes.STRING,
			unique: true
		},
		description: DataTypes.STRING,
		thumbnail: DataTypes.STRING,
		subscribers: DataTypes.INTEGER
	});

	// Relations
	Category.associate = models => {
		Category.belongsTo(models.Category, {
			foreignKey: "parentCategory",
			as: "parent"
		});
	};

	return Category;
};
