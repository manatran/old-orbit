module.exports = (db, DataTypes) => {
  const User = db.define("user", {
    accessToken: {
      type: DataTypes.STRING,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    reputation: DataTypes.INTEGER,
    isAdmin: DataTypes.BOOLEAN
  });

  // Relations
  User.associate = models => {
    User.belongsToMany(models.User, {
      through: "blacklist",
      foreignKey: "blocked",
      as: "blocked"
    });

    User.belongsToMany(models.Category, {
      through: "subscriptions",
      foreignKey: "user",
      as: "subscription"
    });
  };

  return User;
};
