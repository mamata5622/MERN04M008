const express=require("express")
const connectDB = require("./config/db")
require("dotenv").config()
const allRouter=require("./routes/allRoutes")

// myServer.use(express.json())
connectDB()

const myServer=express()

myServer.use("/api",allRouter)
myServer.use("/run",(req,res)=>{
    res.send("Welcome to my server!")
})

const port=process.env.PORT
myServer.listen(port,(req,res)=>{
    console.log("My server is running !")
})