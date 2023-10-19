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

const http = require('http');
const socketIo = require('socket.io');
app.use(express.json());
app.use(cors())
// Define a route
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:1128",  // replace with the port your client-side app is running on
    methods: ["GET", "POST"]
  }
});
io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);
  
  socket.on('message', async (data) => {
    // Save the message to the database
    // You need to create a 'messages' model in your Prisma schema
    await prisma.message.create({
      data: {
        content: data,
        // Add other fields as necessary
      },
    });

    // Broadcast the received message to all connected clients (admin and user)
    io.emit('message', data);
  });

  // socket.on('get message history', async () => {
  //   // Retrieve message history from the database
  //   // You need to create a 'messages' model in your Prisma schema
  //   const pastMessages = await prisma.message.findMany({
  //     orderBy: {
  //       createdAt: 'asc',
  //     },
  //     // Add other query options as necessary
  //   });

  //   socket.emit('message history', pastMessages);
  // });

  socket.on('disconnect', () => {
    console.log(`User disconnected ${socket.id}`);
  });
});

app.use("/users", userRoutes)
app.use("/admin", adminRoutes)
app.use("/reservation",ReservationRoutes)
app.use("/payment",PaymentRouter)
app.use("/brands", brandsRoutes )
app.use("/flights",flightsRoutes)
app.use("/seats", seatsRoutes)
// app.use("/payment",PaymentRouter)

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
