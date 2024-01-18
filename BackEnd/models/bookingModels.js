const { DataTypes } = require("sequelize");
const db = require("../config/dataBase.js");
const User = require("./userModels.js");
const Room = require("./roomModels.js");

const Booking = db.define(
  "Booking",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    checkIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      references: {
        model: User,
        key: "username",
      },
    },
    roomId: {
      type: DataTypes.INTEGER,
      references: {
        model: Room,
        key: "roomId",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports =  Booking;

(async () => {
  await db.sync();
})();
