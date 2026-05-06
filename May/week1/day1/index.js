// this is the emport the library
const express = require("express");

const Server = express()

// Server.use("/run", (req, res) => {
//     res.send("Hii, My server is running now.")
//     console.log("bye")
// })

Server.get("/run", (req, res) => {
    res.send("Hello!.")
})

Server.post("/create",(req,res)=>{
    res.send("post type of request")
})

Server.listen(8000, () => {
    console.log("Hello My server is running ha ha....")
})
 