const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Flights = sequelize.define("User_fligths",
    {}
);
  return Flights;
};
