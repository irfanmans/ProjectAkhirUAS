import { Sequelize } from "sequelize";

const db = new Sequelize("namadatabase", "root", "password_kalau_ada", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default db;
