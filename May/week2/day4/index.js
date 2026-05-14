const express = require("express")
const dotenv = require("dotenv")
const connectDB=require("./config/db")
const router=require("./routes/productRoutes")

const myServer = express()
dotenv.config()

connectDB()

myServer.use(express.json())


myServer.use("/run", (req, res) => {
    res.send("backend is running....")
})

myServer.use("/product",productRoutes)

const port = process.env.PORT;
myServer.listen(port, () => {
    console.log("my server is running....", port)
})