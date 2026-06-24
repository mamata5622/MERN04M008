const express=require("express");
const { createUser, loginUser, updateUser, getAllUser, getUserById, deleteUser } = require("../controllers/userController");
const protect = require("../middlewares/userMiddleware");

const userRoutes=express.Router()

userRoutes.post("/create",createUser);
userRoutes.post("/login", loginUser);
userRoutes.put("/update/:id", updateUser);
userRoutes.get("/all-users", protect, getAllUser);
userRoutes.get("/byId/:id", getUserById);
userRoutes.delete("/delete/:id", deleteUser);


module.exports=userRoutes