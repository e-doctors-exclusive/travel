const express = require("express");
const router = express.Router();

const { getAll, updateById ,deleteById, add ,getById} = require("../controller/reservation.controller");



router.get("/getAll", getAll);
router.get("/getFor/:userId", getById);
router.put("/update/:reser", updateById);
router.post("/add", add);
router.delete("/delete/:reser", deleteById);



module.exports = router;
