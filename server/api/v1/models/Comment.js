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

    Comment.belongsTo(models.User, {
      foreignKey: "author"
    });
  };

  return Comment;
};
