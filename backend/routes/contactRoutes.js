import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// Save contact form submission
router.post("/", async (req, res) => {
  try {
    console.log("Incoming data:", req.body);
    const { fullName, email, message } = req.body;

    const newContact = new Contact({ fullName, email, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Contact saved successfully!" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// (Optional) Get all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE contact by ID
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update a contact
router.put("/:id", async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated doc
    );
    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: "Error updating contact", error });
  }
});

export default router;
