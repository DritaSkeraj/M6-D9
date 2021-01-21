const { Sequelize, DataTypes } = require("sequelize");
const Author = require("./author");
const Category = require("./category");
const Article = require("./article");
const Review = require("./review");
const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
  }
);

const models = {
  Author: Author(sequelize, DataTypes),
  Category: Category(sequelize, DataTypes),
  Article: Article(sequelize, DataTypes),
  Review: Review(sequelize, DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((e) => console.log("Connection failed ", e));

module.exports = models;
