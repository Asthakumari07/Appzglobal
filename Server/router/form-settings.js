const express = require("express");
const router = express.Router();
const FormSettings = require("../models/FormSetting");

// Get current form settings
router.get("/form-settings", async (req, res) => {
  try {
    const settings = await FormSettings.findOne({});
    res.json(settings || { positions: [], experience: [] });
  } catch (err) {
    res.status(500).json({ message: "Error fetching settings" });
  }
});

// Update form settings
router.put("/form-settings", async (req, res) => {
  const { positions, experience } = req.body;

  try {
    let settings = await FormSettings.findOne({});
    if (!settings) {
      settings = new FormSettings({ positions, experience });
    } else {
      settings.positions = positions;
      settings.experience = experience;
    }

    await settings.save();
    res.json({ message: "Form settings updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error updating form settings" });
  }
});

module.exports = router;
