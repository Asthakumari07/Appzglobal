const express = require("express");
const router = express.Router();
const upload = require("../utils/upload"); // path to your multer config
const {
  submitApplication,
  getApplication,
} = require("../controllers/application-controller");

// POST: Submit a job application with resume upload
router.post("/", (req, res, next) => {
  upload.single("resume")(req, res, function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    submitApplication(req, res);
  });
});

// GET: Retrieve all submitted applications (optional)
router.get("/", getApplication);

module.exports = router;
