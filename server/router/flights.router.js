const express= require("express")
const router = express.Router()

const {getAllFlights,getFlights,findOneFlight,addFlight,updateFlight,deleteFlight}=require("../controller/flights.controller.js")

router.post("/add",addFlight)
router.get("/getAll/:destFrom/:destTo/:dateFrom",getFlights)
router.get("/getAll",getAllFlights)
router.get("/getOne/:idFind",findOneFlight)
router.put("/update/:idUpdate",updateFlight)
router.delete("/delete/:idDelete",deleteFlight)

module.exports = router