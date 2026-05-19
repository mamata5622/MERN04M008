const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    try {
        // bring the data from user
        // get the data from request object
        // validation on filed
        // validation on existing 
        // create the user
        // send the response

        const { fullName, age, email, password } = req.body;

        if (!fullName || !age || !email || !password) {
            res.send("kindly fill the field")
        }

        const existUser = await User.findOne({ email });
        if (existUser) {
            res.send("user already exist")
        } else {

            bcrypt.hash(password, 10, async function (err, hash) {
                if (err) {
                    res.status(500).json({ message: "failed to convert in hashpassword" });
                }
                const user = new User({
                    fullName,
                    age,
                    email,
                    password: hash
                })
                await user.save()
                res.send("successfully creates")
            });
        }
    } catch (error) {
        console.log(error.message)
        res.send("failed to create")
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(404).json({ message: "fill the field" })
        }

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            res.status(404).json({ message: "Invalid email" });
        }

        bcrypt.compare(password, existingUser.password, async function (err, result) {
            if (!result) {
                res.status(401).json({ message: "Invalid Password" })
            } else {

                const token = await jwt.sign({ user: existingUser }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.EXPIRESIN });

                res.status(200).json({ message: "Login successfull", token })
            }
        });

    } catch (error) {
        res.status(500).json({ message: "failed to login" })
    }
}