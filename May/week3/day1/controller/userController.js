const bcrypt = require("bcrypt");

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