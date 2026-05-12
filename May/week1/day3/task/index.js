const express=require("express")
const userRoutes=require("./userRoutes")
const dotenv=require("dotenv")
const connectDB=require("./config/db")

const Server=express()

Server.use(express.json())
connectDB()

Server.use("/api",userRoutes)

const port=process.env.PORT;

Server.listen(port,()=>{
    console.log("My server is running....",port)
})