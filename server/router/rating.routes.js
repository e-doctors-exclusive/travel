const express  = require ('express')
const RatingRouter = express.Router()
const { getAllRating,addrating} = require("../controller/rating.controller")

RatingRouter.get("/get/:id",getAllRating)
RatingRouter.post("/add",addrating)
module.exports = RatingRouter