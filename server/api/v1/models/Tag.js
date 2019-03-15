module.exports = (db, DataTypes) => {
  const Tag = db.define("tag", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });

  return Tag;
};
