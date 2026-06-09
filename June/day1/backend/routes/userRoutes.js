const express=require("express");
const { createUser } = require("../controllers/userController");

const userRoutes=express.Router()

userRoutes.post("/create",createUser);

module.exports=userRoutes