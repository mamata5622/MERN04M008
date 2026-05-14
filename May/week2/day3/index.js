const express = require("express")
const dotenv = require("dotenv")
const connectDB=require("./config/db")
const userRoutes=require("./routes/userRoutes")
const isLogin = require("./middleware/isLoginMiddleWare")
// const authentication = require("./middleware/authMiddleWare")
// const validation = require("./middleware/ValidationMiddleWare")

const myServer = express()
dotenv.config()

connectDB()

myServer.use(express.json())

// myServer.use(validation)
// myServer.use(authentication)
// myServer.use(isLogin)

myServer.use("/run", (req, res) => {
    res.send("backend is running....")
})

myServer.use("/user",userRoutes)

const port = process.env.PORT;
myServer.listen(port, () => {
    console.log("my server is running....", port)
})