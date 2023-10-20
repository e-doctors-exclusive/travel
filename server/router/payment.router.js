const express  = require ('express')
const PaymentRouter = express.Router()
const {makePayment,verify,addUserPayment,getAllPayment,getAllPaymentById} = require("../controller/payment.controller")

PaymentRouter.post("/payment",makePayment)
PaymentRouter.post("/payment/:id",verify)
PaymentRouter.post("/AddUserPayment",addUserPayment)
PaymentRouter.get("/getAllPayments",getAllPayment)
PaymentRouter.get("/getAllPaymentById/:ide",getAllPaymentById)
module.exports = PaymentRouter