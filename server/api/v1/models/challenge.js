module.exports = (db, DataTypes) => {
  const Challenge = db.define("challenge", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    from: DataTypes.DATE,
    til: DataTypes.DATE
  });

  // Relations
  Challenge.associate = models => {
    Challenge.hasOne(models.Category, {
      foreignKey: "parentCategory"
    });
  };

  return Challenge;
};
