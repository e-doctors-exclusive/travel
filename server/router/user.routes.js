const express = require("express");
const router = express.Router();
const {checkStatus} = require('../Middlewares/BlockingMiddleware')
const { signup, login, getAll , update, getOne , deleted,accessStatus} = require("../controller/user.controller");


router.post("/login",checkStatus, login);
router.post("/signup", signup);
router.get("/getAll", getAll)
router.put("/:id", update);
router.get("/:id", getOne)
router.delete("/:id", deleted);
router.put('/status/:id',accessStatus)

module.exports = router;
