const express  = require ('express')
const PaymentRouter = express.Router()
const {makePayment,verify} = require("../controller/payment.controller")

PaymentRouter.post("/payment",makePayment)
PaymentRouter.post("/payment/:id",verify)
module.exports = PaymentRouter