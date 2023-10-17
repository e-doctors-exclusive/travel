const { Sequelize, DataTypes } = require("sequelize");


const connection = new Sequelize("flightapp", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});


connection
  .authenticate()
  .then(() => console.log("connection established"))
  .catch(() => console.log("connection rejected"));

const User = require("../model/user.model")(connection, DataTypes);
const Flights = require("../model/flights.model")(connection, DataTypes);
const Admin = require("../model/admin")(connection,DataTypes)
const Reservation = require("../model/reservation.model")(connection,DataTypes)
const Payments = require("../model/payment.model")(connection,DataTypes)
const Seats = require("../model/seats.model")(connection,DataTypes)
const UserFligths = require("../model/UserFligths.modal")(connection)
const Brands = require("../model/brands.model")(connection,DataTypes)
const CreditCard = require("../model/creditCardDetails.model")(connection, DataTypes)


User.belongsToMany(Flights, { through: UserFligths });
Flights.belongsToMany(User, { through: UserFligths });


Flights.hasMany(Reservation);
Reservation.belongsTo(Flights);

Flights.hasMany(Seats);
Seats.belongsTo(Flights);

Seats.hasOne(Reservation);
Reservation.hasOne(Seats);

Reservation.hasOne(Payments);
Payments.belongsTo(Reservation);

Brands.hasMany(Flights);
Flights.belongsTo(Brands);


const db ={}
db.User = User;
db.Flights = Flights;
db.Admin  = Admin
db.Reservation  = Reservation
db.Payments = Payments
db.Seats = Seats
db.Brands = Brands
db.CreditCard = CreditCard

  // connection
  //   .sync({force: true , alter : true })
  //   .then(() => console.log("tables created"))
  //   .catch((error) => {throw error;});

module.exports = db

