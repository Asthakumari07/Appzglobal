import User from "../models/user-model.js";
import Contact from "../models/contact-model.js";
import Application from "../models/application-model.js";

export const getAllUsers = async (req, res, next) => {
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

export const getAllContacts = async (req, res, next) => {
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

export const getAllApplications = async (req, res, next) => {
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
