const isLogin=async(rer,res,next)=>{
    try {
        console.log("this is my isLogin middleware.")
        next()
    } catch (error) {
       res.status(500),json({message:"failed in the isLogin middleware"})
    }
}

module.exports=isLogin