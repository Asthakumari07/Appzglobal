// application-router.js
const express = require("express");
const router = express.Router();
const upload = require("../utils/upload");
const {
  submitApplication,
  getApplication,
} = require("../controllers/application-controller");

router.post("/", upload.single("resume"), submitApplication);

module.exports = router;
