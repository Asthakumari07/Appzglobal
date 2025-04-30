const Application = require("../models/application-model");

// Handle application submission with resume upload
const submitApplication = async (req, res) => {
  try {
    const { name, email, apply, linkedin, message } = req.body;
    const resume = req.file ? req.file.filename : null;

    const application = new Application({
      name,
      email,
      apply,
      linkedin,
      message,
      resume,
    });

    await application.save();
    res.status(201).json({ msg: "Application submitted successfully!" });
  } catch (error) {
    console.error("Application error:", error);
    res.status(500).json({ error: "Failed to submit application." });
  }
};

// Fetch all applications (for admin view)
const getApplication = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (error) {
    console.error("Get applications error:", error);
    res.status(500).json({ error: "Failed to retrieve applications." });
  }
};

module.exports = {
  submitApplication,
  getApplication,
};
