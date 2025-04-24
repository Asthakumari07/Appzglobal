const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to this page for login");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong." });
  }
};

const register = async (req, res) => {
  try {
    // Log the request body for debugging
    console.log(req.body);

    // Destructure the incoming request body
    const { name, email, number, website, feedback } = req.body;

    // Validate if all fields are present
    if (!name || !email || !number || !website || !feedback) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if a user already exists with the provided email
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Create a new user
    const userCreated = await User.create({
      name,
      email,
      number,
      website,
      feedback,
    });

    // Send a success message with a user-friendly message
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.log(error); // Log error for debugging
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
  }
};

module.exports = { home, register };
