const express= require("express")
const router = express.Router()


const {signIn, createAdmin, getAllAdmins}= require("../controller/admin.controller")

router.post('/signin', signIn)
router.post('/createAdmin', createAdmin)
router.get('/getAll', getAllAdmins) 


module.exports = router