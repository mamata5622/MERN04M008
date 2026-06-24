const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

exports.registration = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        if (!name || !email || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: "Kindly fill all field"
            })
        }

        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.status(404).json({
                success: false,
                message: "User already exists"
            })
        }
        const hash = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            phone,
            password: hash,
        });
        return res.status(201).json({
            success: true,
            message: "Successfully created",
            user
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}
exports.login = async (req, res) => {
    try {
        const { email, phone } = req.body;

        if (!email || !phone) {
            return res.status(404).json({
                success: false,
                message: "Kindly fill all required field"
            })
        }
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "Invalid email"
            });
        }

        bcrypt.compare(password, existingUser.password, async function (err, result) {
            if (!result) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid Password"
                })
            } else {

                const token = await jwt.sign({ user: existingUser }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.EXPIRESIN });

                return res.status(200).json({
                    success: true,
                    message: "Login successfull", token
                })
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}