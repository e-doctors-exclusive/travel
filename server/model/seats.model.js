const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  const Seats = Sequelize.define("Seats", {
    availble: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM({
        values: ["Business", "Economic"],
      }),
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Seats;
};
