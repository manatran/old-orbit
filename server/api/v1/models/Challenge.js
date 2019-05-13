module.exports = (db, DataTypes) => {
  const Challenge = db.define("challenge", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    month: {
			type: DataTypes.ENUM,
			values: [
				'jan',
				'feb',
				'mar',
				'apr',
				'may',
				'jun',
				'jul',
				'aug',
				'sep',
				'oct',
				'nov',
				'dec'
			]
		},
    year: DataTypes.INTEGER
  });

  return Challenge;
};
