const express = require("express")
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")
require("dotenv").config()

const myServer=express()
connectDB()
myServer.use(express.json())
myServer.use("/user",userRoutes)

myServer.use("/run",(req,res)=>{
    res.send("Hello")
})
const port=process.env.PORT

myServer.listen(port,()=>{
    console.log("welcome to my server!",port)
})