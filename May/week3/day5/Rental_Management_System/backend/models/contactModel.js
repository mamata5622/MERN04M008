const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true,
        },
        email: {
            type: String,
            require: true,
            trim: true,

        },
        phone:{
            type:Number,

        },
        message: {
            type: String,
            require: true,
            trim: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    },
)

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;