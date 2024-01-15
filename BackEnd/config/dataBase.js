const { Sequelize } = require("sequelize");

const db = new Sequelize("project_test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

db.authenticate()
  .then(() => {
    console.log("Successfully connect to database");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = db;
