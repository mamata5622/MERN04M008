const express = require("express")
const dotenv = require("dotenv")
const connectDB=require("./config/db")


const myServer = express()
dotenv.config()

connectDB()

myServer.use(express.json())

const userRoutes=require("./routes/userRoutes")

myServer.use("/run", (req, res) => {
    res.send("backend is running....")
})

myServer.use("/user",userRoutes)

const port = process.env.PORT;
myServer.listen(port, () => {
    console.log("my server is running....", port)
})