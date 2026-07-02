const { createContact, deleteContact, getContacts } = require("../controllers/contactController");

const contactRoutes = require("express").Router()
contactRoutes.post("/create", createContact)
contactRoutes.delete("/delete/:id",deleteContact)
contactRoutes.get("/get",getContacts)

module.exports = contactRoutes;