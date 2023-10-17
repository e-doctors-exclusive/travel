const express = require("express");
const router = express.Router();

const { signup, login, getAll , update, getOne , deleted} = require("../controller/user.controller");

router.get("/getAll", getAll)

router.post("/login", login);
router.post("/signup", signup);
router.put("/update/:id", update);
router.get("/getUser", getOne)
router.delete("/delete/:id", deleted);

module.exports = router;
