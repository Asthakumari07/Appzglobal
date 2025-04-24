const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const Application = require("../models/application-model");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users.length) {
      return res.status(404).json({ message: "No Users Found" });
    }
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts.length) {
      return res.status(404).json({ message: "No Contacts Found" });
    }
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const getAllApplications = async (req, res, next) => {
  try {
    const applications = await Application.find();
    if (!applications.length) {
      return res.status(404).json({ message: "No Applications Found" });
    }
    res.status(200).json(applications);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  getAllApplications,
};
