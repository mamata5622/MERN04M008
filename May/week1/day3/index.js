const express = require("express");
const dotenv = require("dotenv")
const userRoutes =require("./routes/userRoutes");
const connectDB = require("./config/db");

dotenv.config()

const myserver = express();

myserver.use(express.json())

connectDB()

// myserver.use("/api", (req, res) => {
//     res.send("Hello")
// })

myserver.use("/api",userRoutes)

const port = process.env.PORT;

myserver.listen(port, () => {
    console.log("my server is running.", port)
})