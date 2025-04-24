const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const { name, number, email, message } = req.body;

    console.log("Received data:", req.body); //

    if (!name || !number || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const result = await Contact.create({ name, number, email, message });
    console.log("Document saved:", result);

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error while saving contact:", error.message);
    return res.status(500).json({ message: "Message not delivered" });
  }
};

module.exports = contactForm;
