const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true
    },
    phone: {
        type: Number,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ["admin", "organisation", "user"],
        default:"user"
    }
},
    {
        versionKey: false,
        timestamps: true,
    },
)

const User=mongoose.model("User",userSchema);

module.exports=User