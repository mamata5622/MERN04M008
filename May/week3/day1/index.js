const express = require("express");
const dotenv=require("dotenv");
const allRouter = require("./routes/allRoutes");
dotenv.config()

const myserver = express();

myserver.use("/api",allRouter)

myserver.use("/run", (req, res) => {
    res.send("Hello")
})

const port=process.env.PORT

myserver.listen(port, () => {
    console.log("my server is running.", port)
})
