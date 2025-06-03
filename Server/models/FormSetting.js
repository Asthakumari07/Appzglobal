import mongoose from "mongoose";

const formSettingsSchema = new mongoose.Schema({
  positions: [String],
  experience: [String],
});

const FormSettings = mongoose.model("FormSettings", formSettingsSchema);

export default FormSettings;
