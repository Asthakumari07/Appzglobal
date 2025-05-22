const express = require("express");
const router = express.Router();
const upload = require("../utils/upload"); // your multer config
const {
  submitApplication,
  getApplication,
  updateApplication, // <-- import the new controller
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

// GET: Retrieve all submitted applications
router.get("/", getApplication);

// PUT: Update application position and experience
router.put("/:id", updateApplication); // <-- add this route

module.exports = router;
