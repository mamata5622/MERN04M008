const User = require("../models/userModel");
const bcrypt=require("bcrypt")

exports.createUser = async (req, res) => {
    try {
        const { name, age, email, password } = req.body
        if (!name || !age || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Kindly Fill all fields",
            });
        }

        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists",
            });
        }

        const hash = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            age,
            email,
            password: hash,
        });

        return res.status(201).json({
            success: true,
            message: "Successfully created",
            user,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}