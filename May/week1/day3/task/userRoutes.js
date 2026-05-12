const express = require("express")

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("get request called")
})

router.post("/post",(req,res)=>{
    res.send("post request called")
})


module.exports = router