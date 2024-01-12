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
    checkOut: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      roomId: {
        type: DataTypes.INTEGER,
        references: {
          model: Room,
          key: "id",
        },
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Booking;

(async () => {
  await db.sync();
})();
