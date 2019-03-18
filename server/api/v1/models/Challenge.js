module.exports = (db, DataTypes) => {
  const Challenge = db.define("challenge", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    from: DataTypes.DATE,
    til: DataTypes.DATE
  });

  return Challenge;
};
