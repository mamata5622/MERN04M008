const User = require("../models/userModel");

const getUsers = async (req, res) => {
    try {
        const { Id } = req.params;
        const users = await users.findById(Id).select("-password")
        // res.send({users,message:"success"})
        if (!users){
            res.status(404).json({message:"success fetched",user})
        }

            res.status(200).json({ message: "success" })
    } catch (error) {
        res.status(500).json({ message: "failed" })
    }
}

const createUser = async (req, res) => {
    try {
        // bring the data from user
        // get the data from request object
        // validation on filed
        // validation on existing 
        // create the user
        // send the response
        const { fullname, age, email, password } = res.body
        if (!fullname || !age || !email || !password) {
            res.send("Kindly fill the field")
        } const existUser = await User.findOne({ email });
        if (existUser) {
            res.send("user already exist")
        } else {
            const user = new User({ fullName, age, email, password })
            await user.save()
            res.send("successfully creates")
        }
    } catch (error) {
        console.log(error.message)
        res.send("failed to create")
    }
}

const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = req.body

        const existingUser = await User.findById(userId).select("-password");

        if (!existingUser) {
            res.status(404).json({ message: "user not found" })
        }

        const updateUser = await User.findByIdAndUpdate(userId, user, { new: true });

        if (!updateUser) {
            res.status(500).json({ message: "failed to update the user" })
        }
        res.status(200).json({ message: "successfully updated", updateUser })
    } catch (error) {

    }
}

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const existingUser=await User.findById(userId).select("-password");

        if(!existingUser){
            res.status(404).json({message:"user not found"})
        }

        const deletedUser= await User.findByIdAndDelete(userId);

        if(!deleteUser){
            res.status(500).json({message:"user is not deleted"})
        }

        res.status(200).json({message:"successfully deleted"})

    } catch (error) {
        res.status(500).json({ message: "failed to delete" })
    }
}

module.exports={getUsers, createUser,  updateUser, deleteUser}