const express = require("express");
const {
  getAllUsers,
  getAllContacts,
  getAllApplications,
} = require("../controllers/admin-controller");

const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/contacts").get(getAllContacts);
router.route("/applications").get(getAllApplications);

module.exports = router;
