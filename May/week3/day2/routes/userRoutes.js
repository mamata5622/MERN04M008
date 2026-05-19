const express=require("express")
const {createUser,getUsers,updateUser,deleteUser,getUserById}=require("../controllers/userController")
const protect = require("../middlewares/authMiddleWare")

const router=express.Router()


router.post("/",createUser)
router.post("/login",login)
router.get("/",protect, getUsers)
router.get("/:id",getUserById)
router.put("/:userid",updateUser)
router.delete("/:userid",deleteUser)

module.exports=router 