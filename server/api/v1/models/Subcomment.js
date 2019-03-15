module.exports = (db, DataTypes) => {
  const Subcomment = db.define("subcomment", {
    content: DataTypes.STRING
  });

  // Relations
  Subcomment.associate = models => {
    Subcomment.belongsToMany(models.User, {
      through: "subcommentLikes"
    });

    Subcomment.hasMany(models.Tag, {
      as: "tags"
    });

    Subcomment.hasOne(models.Comment, {
      foreignKey: "parentComment"
    });

    Subcomment.belongsTo(models.User, {
      foreignKey: "author"
    });
  };

  return Subcomment;
};
