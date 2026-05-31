const express = require("express");
const connectDB = require("./config/db");
const allRoute = require("./routes/allRoute");
require("dotenv").config()
connectDB(); 

const myServer = express()
myServer.use(express.json())


const port = process.env.PORT
myServer.use("/api",allRoute)

myServer.use("/run",(req, res) => {
    res.send("hello everyone !")
})

myServer.listen(port, () => {
    console.log("my server is running !", port)
});