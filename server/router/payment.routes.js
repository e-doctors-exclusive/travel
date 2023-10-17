const express = require("express");
const router = express.Router();

const { getAll, add ,getById} = require("../controller/payment.controller");



router.get("/getAll", getAll);
router.get("/getFor", getById);
router.post("/add", add);




module.exports = router;
