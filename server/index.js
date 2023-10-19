const express = require('express');
const cors = require('cors')
require ('dotenv').config()
const app = express();
const port = 1128; // You can choose any available port
app.use(express.json());
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// require("./database/index.js")

require('dotenv').config()
const userRoutes = require("./router/user.routes.js")
const adminRoutes = require("./router/admin.router.js")
const flightsRoutes = require("./router/flights.routes.js")
const seatsRoutes = require("./router/seats.routes.js")
const ReservationRoutes = require("./router/reservation.routes.js")
const brandsRoutes = require("./router/brandes.routes.js")
// const paymentRoutes = require("./router/payment.routes.js")
const PaymentRouter = require("./router/payment.router.js")


app.use(cors())
// Define a route
app.use(express.json());
// Define a route


app.use("/users", userRoutes)
app.use("/admin", adminRoutes)
app.use("/reservation",ReservationRoutes)
app.use("/payment",PaymentRouter)
app.use("/brands", brandsRoutes )
app.use("/flights",flightsRoutes)
app.use("/seats", seatsRoutes)
// app.use("/payment",PaymentRouter)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
