const mongoose= require("mongoose")

const connectDB=async()=>{
    try {
       const connect = await mongoose.connect(process.env.MONGO_URL);
       console.log("my DB connected")
    } catch (error) {
       console.log("failed to connect") 
    }
}

module.exports=connectDB