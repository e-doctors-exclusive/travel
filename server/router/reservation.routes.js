const express = require("express");
const router = express.Router();

const { getAll, updateById ,deleteById, add ,getById} = require("../controller/reservation.controller");



router.get("/getAll", getAll);
router.post("/add", add);
router.put("/update/:id", updateById);
router.delete("/delete/:id", deleteById);
router.get("/:id", getById);



module.exports = router;
