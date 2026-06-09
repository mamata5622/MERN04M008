const mongoose=require("mongoose")

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
        },
        age:{
            type:Number,
        },
        email:{
            type:String,
            trim:true,
            required:true,
        },
        password:{
            type:String,
            required:true,

        },
    },
    {
        versionKey:false,
        timestamps:true
    },
    
)
const User=mongoose.model("User",userSchema);
module.exports=User