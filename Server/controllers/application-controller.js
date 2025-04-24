const Application = require("../models/application-model");

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

module.exports = { submitApplication };
