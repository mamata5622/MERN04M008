const authentication=async(rer,res,next)=>{
    try {
        console.log("this is my authentication middleware.")
        next()
    } catch (error) {
       res.status(500),json({message:"failed in the authentication middleware"})
    }
}

module.exports=authentication