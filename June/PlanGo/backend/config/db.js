const mongoose=require("mongoose")

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log("successfully db connect")
        console.log(conn.connection.host)
    } catch (error) {
        console.log("failed to connect db!")
    }
}

module.exports=connectDB