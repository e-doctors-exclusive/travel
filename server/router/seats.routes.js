const express = require("express")
const router = express.Router()

const {getAll,updatee,add}= require("../controller/seats.controller")

router.get("/getAll", getAll)
router.post("/addSeats", add)
router.put("/update/:id",updatee)



module.exports = router