// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./router/auth-router.js";
import contactRoute from "./router/contact-router.js";
import applicationRoute from "./router/application-router.js";
import jobPostRoute from "./router/jobPosts.js";
import formSettingRouter from "./router/form-settings.js";
import adminRoute from "./router/admin-router.js";
import connectDb from "./utils/db.js";

dotenv.config();

const app = express();

// CORS settings
app.use(
  cors({
    origin: ["https://appzglobaltech.com", "http://appzglobaltech.com"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Emulate __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static files
const buildpath = path.join(__dirname, "../Client/dist");
app.use(express.static(buildpath));
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use("/api/application", applicationRoute);
app.use("/api/admin", adminRoute);
app.use("/api", formSettingRouter);
app.use("/api/jobposts", jobPostRoute);

const PORT = process.env.PORT || 5000;
connectDb().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port: ${PORT}`);
  });
});
