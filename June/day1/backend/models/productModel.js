const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String
        },
        price: {
            type: Number
        },
        isActive: {
            type: Boolean,
            default: true
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const Product=mongoose.model("Product",productSchema)

module.exports=Product