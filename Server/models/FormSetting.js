const mongoose = require("mongoose");

const formSettingsSchema = new mongoose.Schema({
  positions: [String],
  experience: [String],
});

const FormSettings = mongoose.model("FormSettings", formSettingsSchema);

module.exports = FormSettings;
