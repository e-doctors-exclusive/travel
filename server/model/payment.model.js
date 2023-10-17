const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Payments = sequelize.define("Payments",
    { 
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }
);
  return Payments;
};
