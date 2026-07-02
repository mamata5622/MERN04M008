const express=require("express")
const authRoutes = require("./authRoutes")
const contactRoutes = require("./contactRoutes")

const allRoutes=express.Router()

allRoutes.use("/auth",authRoutes)
allRoutes.use("/contact",contactRoutes)

module.exports=allRoutes