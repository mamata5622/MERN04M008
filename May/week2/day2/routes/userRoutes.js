const express=require("express")
const {createUser,getUsers,updateUser,deleteUser}=require("../controllers/userController")

const router=express.Router()

router.get("/:id",getUsers)
router.post("/",createUser)
router.put("/:userid",updateUser)
router.delete("/:userid",deleteUser)

module.exports=router