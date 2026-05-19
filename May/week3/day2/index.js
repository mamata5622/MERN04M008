const express = require("express")
require("dotenv").config()
const connectDB=require("./config/db")
const allRouter = require("./routes/allroutes")

const myServer = express()

connectDB()

myServer.use(express.json())

myServer.use("/api",allRouter)
myServer.use("/run", (req, res) => {
    res.send("backend is running....")
})

const port = process.env.PORT;
myServer.listen(port, () => {
    console.log("my server is running....", port)
})