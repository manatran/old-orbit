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
  Category: db.import("./category"),
  Challenge: db.import("./challenge"),
  Comment: db.import("./comment"),
  Subcomment: db.import("./subcomment"),
  Post: db.import("./post"),
  Report: db.import("./report"),
  Revision: db.import("./revision"),
  Submission: db.import("./submission"),
  Tag: db.import("./tag"),
  User: db.import("./user")
};

Object.keys(models).forEach(modelName => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = db;
models.Sequelize = Sequelize;

module.exports = models;
