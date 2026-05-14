const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Kindly fill the name"]
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
})
const Product = mongoose.model("Product", productSchema);
module.exports = Product