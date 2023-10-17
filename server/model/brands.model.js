const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Brands = sequelize.define("brands",
    { 
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      describtion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image : {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }
);
  return Brands;
};
