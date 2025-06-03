import express from "express";
import JobPost from "../models/JobPost.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const jobs = await JobPost.find();
  res.json(jobs);
});

router.post("/", async (req, res) => {
  const job = new JobPost(req.body);
  await job.save();
  res.json(job);
});

router.put("/:id", async (req, res) => {
  const updated = await JobPost.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await JobPost.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
