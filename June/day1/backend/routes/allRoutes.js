const express=require("express")
const userRoutes = require("./userRoutes")
const productRoutes = require("./productRoutes")

const allRoutes=express.Router()

allRoutes.use("/user",userRoutes)
allRoutes.use("/product",productRoutes)


module.exports=allRoutes