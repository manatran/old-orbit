module.exports = (db, DataTypes) => {
  const Subcomment = db.define("subcomment", {
    content: DataTypes.STRING
  });

  // Relations
  Subcomment.associate = models => {
    Subcomment.belongsToMany(models.User, {
      through: "subcommentLikes"
    });

    Subcomment.hasOne(models.Comment, {
      foreignKey: "parentComment"
    });

    Subcomment.belongsTo(models.User, {
      foreignKey: "authorId",
      as: "author"
    });
  };

  return Subcomment;
};
