module.exports = (db, DataTypes) => {
  const Submission = db.define("submission", {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    githubUrl: DataTypes.STRING,
    thumbnail: DataTypes.STRING
  });

  // Relations
  Submission.associate = models => {
    Submission.belongsToMany(models.User, {
      through: "submissionLikes"
    });

    Submission.belongsToMany(models.Tag, {
      through: "submissionTags"
    });

    Submission.hasMany(models.Comment, {
      as: "comments"
    });

    Submission.belongsTo(models.Challenge, {
      foreignKey: "contest"
    });

    Submission.belongsTo(models.User, {
      foreignKey: "author"
    });
  };

  return Submission;
};
