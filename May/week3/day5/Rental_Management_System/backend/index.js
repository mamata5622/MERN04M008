const express = require("express");
const connectDB = require("./config/db");
const allRoutes = require("./routes/allRoutes");

require("dotenv").config()


const myServer = express()
connectDB()
myServer.use(express.json())

myServer.use("/api",allRoutes)

myServer.use("/run", (res, req) => {
    res.send("my server world")
})
const port = process.env.PORT;
myServer.listen(port, () => {
    console.log("my server is running!", port)
});
