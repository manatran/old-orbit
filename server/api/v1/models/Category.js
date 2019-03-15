module.exports = (db, DataTypes) => {
  const Category = db.define("category", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    thumbnail: DataTypes.STRING
  });

  // Relations
  Category.associate = models => {
    Category.hasOne(models.Category, {
      foreignKey: "parentCategory"
    });
  };

  return Category;
};
