const mongoose=require("mongoose");

const connectDB=async()=>{
    try {
        const connection=await mongoose.connect(process.env.MONGO_URL);
        console.log("my DB connected")
        console.log(connection.connection.host)
    } catch (error) {
        console.log("failed to connect")
    }
}

module.exports=connectDB