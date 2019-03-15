const Sequelize = require("sequelize");

// Connect to Postgres
const dbConfig = require("./../../../config/config").database;
const db = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  dialectOptions: {
    ssl: true
  }
});

const models = {
  Category: db.import("./Category"),
  Challenge: db.import("./Challenge"),
  Comment: db.import("./Comment"),
  Subcomment: db.import("./Subcomment"),
  Post: db.import("./Post"),
  Report: db.import("./Report"),
  Revision: db.import("./Revision"),
  Submission: db.import("./Submission"),
  Tag: db.import("./Tag"),
  User: db.import("./User")
};

Object.keys(models).forEach(modelName => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = db;
models.Sequelize = Sequelize;

module.exports = models;
