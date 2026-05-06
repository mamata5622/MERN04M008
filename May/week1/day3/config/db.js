const mongoose=require("mongoose")
const connectDB=async()=>{
    try {
       const connnection=await mongoose.connect(process.env.MONGO_URL); 
       console.log("my db connected !")
    } catch (error) {
        console.log("failed to connect")
    }
}

module.exports=connectDB