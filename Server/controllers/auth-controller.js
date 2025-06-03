import User from "../models/user-model.js";

export const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to this page for login");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong." });
  }
};

export const register = async (req, res) => {
  try {
    console.log(req.body);

    const { name, email, number, website, feedback } = req.body;

    if (!name || !email || !number || !website || !feedback) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Optional: uncomment if you want to check existing email
    // const userExist = await User.findOne({ email });
    // if (userExist) {
    //   return res.status(400).json({ msg: "Email already exists" });
    // }

    const userCreated = await User.create({
      name,
      email,
      number,
      website,
      feedback,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
  }
};
