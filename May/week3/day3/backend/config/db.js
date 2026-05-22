const mongoose=require("mongoose")


const connectDB=async ()=>{
    try {
        const connection=await mongoose.connect(process.env.MONGO_URL)
        console.log("My db is connected :) ")
    } catch (error) {
        console.log("failed to connect")
    }
}

module.exports=connectDB