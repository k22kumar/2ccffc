const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL || "messenger", "postgres","password", {
  logging: false,
  host: "localhost",
  dialect: "postgres"
});

module.exports = db;
