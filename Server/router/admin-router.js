import express from "express";
import {
  getAllUsers,
  getAllContacts,
  getAllApplications,
} from "../controllers/admin-controller.js";

const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/contacts").get(getAllContacts);
router.route("/applications").get(getAllApplications);

export default router;
