const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const CreditCard = sequelize.define("CreditCard", {
    cardName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cardNumber: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    expirationDate: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    CVV: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
  });

  return CreditCard;
};
