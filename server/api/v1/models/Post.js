module.exports = (db, DataTypes) => {
  const Post = db.define("post", {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    pinned: DataTypes.BOOLEAN
  });

  // Relations
  Post.associate = models => {
    Post.belongsToMany(models.User, {
      through: "postLikes"
    });

    Post.belongsToMany(models.Tag, {
      through: "postTags"
    });

    Post.hasMany(models.Comment, {
      as: "comments"
    });

    Post.belongsTo(models.Category, {
      foreignKey: "subject"
    });

    Post.belongsTo(models.User, {
      foreignKey: "author"
    });
  };

  return Post;
};
