const { DataTypes } = require("sequelize");
const db = require("../config/dataBase.js");

const Room = db.define(
  "Room",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "available",
    },
  },
  {
    freezeTableName: true,
  }
);

export default Room;

(async () => {
  await db.sync();
})();
