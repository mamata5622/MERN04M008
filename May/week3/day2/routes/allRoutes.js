const express=require("express")
const userRoutes=require("./userRoutes")
const productRoutes=require("./productRoutes")

const allRouter=express.Router();

allRouter.use("/user",userRoutes)
allRouter.use("/product",productRoutes)


module.exports=allRouter 