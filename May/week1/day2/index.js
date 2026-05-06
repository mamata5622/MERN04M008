

const express=require("express")

const myServer=express()

myServer.use("/api", (req, res) => {
    res.send("Hii Welcome !");
})

myServer.post("/create", (req, res) => {
    res.send("post request called !")
})

myServer.put("/update", (req, res) => {
    res.send("put request called !")
})

myServer.listen(8080, () => {
    console.log("Hello My server is running !")
})