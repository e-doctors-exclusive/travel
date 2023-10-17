const express = require('express')
const router = express.Router()

const {getAll, add,deletee,updatee}=require("../controller/brands.controller")

router.get('/getAll', getAll)
router.post ('/add', add)
router.put ('/:id', updatee)
router.delete ('/:id', deletee)


module.exports = router