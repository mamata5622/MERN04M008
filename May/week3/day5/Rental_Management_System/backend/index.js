const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config()


const myServer = express()
connectDB()

myServer.use("/run", (res, req) => {
    res.send("my server world")
})
const port = process.env.PORT;
myServer.listen(port, () => {
    console.log("my server is running!", port)
});