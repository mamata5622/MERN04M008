const express=require("express")
const {createUser,getUsers,updateUser,deleteUser,getUserById}=require("../controllers/userController")
const validation = require("../middleware/ValidationMiddleWare")
const authentication = require("../middleware/authMiddleWare")
const isLogin = require("../middleware/isLoginMiddleWare")

const router=express.Router()

router.get("/",validation,authentication,isLogin, getUsers)
router.get("/:id",getUserById)
router.post("/",createUser)
router.put("/:userid",updateUser)
router.delete("/:userid",deleteUser)

module.exports=router 