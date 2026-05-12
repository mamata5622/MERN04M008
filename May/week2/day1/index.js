const express = require("express");
const dotenv=require("dotenv");
dotenv.config()

const myserver = express();

myserver.use("/api", (req, res) => {
    res.send("Hello")
})

const port=process.env.PORT

myserver.listen(port, () => {
    console.log("my server is running.", port)
})
