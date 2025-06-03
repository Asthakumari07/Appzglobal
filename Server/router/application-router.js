import express from "express";
import upload from "../utils/upload.js"; // make sure upload.js uses ES modules too
import {
  submitApplication,
  getApplication,
  updateApplication,
} from "../controllers/application-controller.js";

const router = express.Router();

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
router.put("/:id", updateApplication);

export default router;
