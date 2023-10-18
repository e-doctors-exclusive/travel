const express = require("express");
const router = express.Router();

const { signup, login, getAll , update, getOne , deleted} = require("../controller/user.controller");


router.post("/login", login);
router.post("/signup", signup);
router.get("/getAll", getAll)
router.put("/:id", update);
router.get("/:id", getOne)
router.delete("/:id", deleted);

module.exports = router;
