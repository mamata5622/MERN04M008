const Contact = require("../models/contactModel");


exports.createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // vallidation
        if (!name || !email || !message) {
            res.status(400).json({
                success: false,
                message: "Name, email and message are required.",
            });
        }
        const contact = await Contact.create({
            name,
            email,
            message,
        })
        if (!contact) {
            res.status(200).json({ success: false, message: "failed to create" });
        }
        res.status(201).json({ success: true, message: "successfully created", vehicle });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "faild to submit",
            error: err.message
        });
    }
}

// deleted contact

exports.deleteContact = async (req, res) => {
    try {
        const { id } = req.params;

        const deleteContact = await Contact.findByIdAndDelete(id)

        if (!deleteContact) {
            res.status(200).json({
                success: false,
                message: "some error when delete the vehicle",
            });
        }
        res.status(200).json({ success: true, message: "successfully deleted" });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Failed to delete contact.",
            error: err.message,
        });
    }
}