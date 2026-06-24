const express=require("express")
const { registration, login } = require("../controllers/authController")

const authRoutes=express.Router()

authRoutes.post("/register",registration);
authRoutes.post("/login",login)

module.exports=authRoutes