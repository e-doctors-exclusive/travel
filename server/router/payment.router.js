const express  = require ('express')
const PaymentRouter = express.Router()
const {makePayment,verify,addUserPayment,getAllPayment} = require("../controller/payment.controller")

PaymentRouter.post("/payment",makePayment)
PaymentRouter.post("/payment/:id",verify)
PaymentRouter.post("/AddUserPayment",addUserPayment)
PaymentRouter.get("/getAllPayments",getAllPayment)
module.exports = PaymentRouter