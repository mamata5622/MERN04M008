const Contact = require("../models/contactModel");


exports.createContact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // vallidation
        if (!name || !email || !phone || !message) {
            res.status(400).json({
                success: false,
                message: "Name, email and message are required.",
            });
        }
        const contact = await Contact.create({
            name,
            email,
            phone,
            message,
        })
        if (!contact) {
            res.status(200).json({ success: false, message: "failed to create" });
        }
        res.status(201).json({ success: true, message: "successfully created" });

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
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    if (!contacts) {
      res.status(200).json({ success: false, message: "contact not found" });
    } else {
      res
        .status(200)
        .json({ success: true, message: "successfully fetched", contacts });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};