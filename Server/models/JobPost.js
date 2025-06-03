import mongoose from "mongoose";

const jobPostSchema = new mongoose.Schema({
  title: String,
  para: String,
  location: String,
  image: String,
});

const JobPost = mongoose.model("JobPost", jobPostSchema);

export default JobPost;
