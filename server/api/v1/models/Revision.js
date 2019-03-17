module.exports = (db, DataTypes) => {
  const Revision = db.define("revision", {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    accepted: DataTypes.BOOLEAN
  });

  // Relations
  Revision.associate = models => {
    Revision.belongsTo(models.Post, {
      foreignKey: "parentPostId",
      as: "parentPost"
    });

    Revision.belongsTo(models.User, {
      foreignKey: "authorId",
      as: "author"
    });
  };

  return Revision;
};
