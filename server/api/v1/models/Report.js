module.exports = (db, DataTypes) => {
  const Report = db.define("report", {
    content: DataTypes.STRING
  });

  // Relations
  Report.associate = models => {
    Report.belongsToMany(models.Tag, {
      through: "reportTags"
    });

    Report.belongsTo(models.Post, {
      foreignKey: "parentPost"
    });

    Report.belongsTo(models.User, {
      foreignKey: "author"
    });

    Report.belongsTo(models.User, {
      foreignKey: "resolvedBy"
    });
  };

  return Report;
};
