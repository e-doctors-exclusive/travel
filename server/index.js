const express = require('express');
const cors = require('cors')
const app = express();
const port = 1128; // You can choose any available port
app.use(express.json());
require("./database/index.js")


const userRoutes = require("./router/user.routes.js")
const adminRoutes = require("./router/admin.router.js")
const flightsRoutes = require("./router/flights.router.js")
const seatsRoutes = require("./router/seats.routes.js")
const ReservationRoutes = require("./router/reservation.routes.js")
const brandsRoutes = require("./router/brandes.routes.js")
const paymentRoutes = require("./router/payment.routes.js")


app.use(cors())
// Define a route
require("./database/index.js")
const http = require('http');
const socketIo = require('socket.io');
app.use(express.json());
app.use(cors())
// Define a route
const server = http.createServer(app);
const io = socketIo(server);
io.on('connection', (socket) => {
  console.log('A user connected');
  
  socket.on('message', (data) => {
    // Broadcast the received message to all connected clients (admin and user)
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
app.use("/users", userRoutes)
app.use("/admin", adminRoutes)
app.use("/reservation",ReservationRoutes)
app.use("/payment",paymentRoutes)
app.use("/brands", brandsRoutes )
app.use("/flights",flightsRoutes)
app.use("/seats", seatsRoutes)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
