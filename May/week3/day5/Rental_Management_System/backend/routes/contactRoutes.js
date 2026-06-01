const { createContact, deleteContact } = require("../controllers/contactController");
const { protect, isAdmin } = require("../middlewares/authMiddleware");

const router = require("express").Router()
router.post("/create", createContact)
router.delete("/delete/:id", protect, isAdmin, deleteContact)

module.exports = router;