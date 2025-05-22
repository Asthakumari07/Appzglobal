const express = require("express");
const http = require("http");
const path = require("path");
const authRouter = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const applicationRoute = require("./router/application-router");
const formSettingRouter = require("./router/form-settings");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Middleware
// app.use(cors("*"));
app.use(
  cors({
    origin: [
      "https://appzglobaltech.com", // Production domain (HTTPS)
      "http://appzglobaltech.com", // HTTP version (if used)
    ],
    methods: ["GET", "POST"],
    credentials: true, // If you need to support cookies/session
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files for frontend (if needed)
const buildpath = path.join(__dirname, "../Client/dist");
app.use(express.static(buildpath)); // Serves the React build

// Serve static uploads
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use("/api/application", applicationRoute);
app.use("/api/admin", adminRoute);
app.use("/api", formSettingRouter);

// Start the server
const PORT = process.env.PORT || 5000;

connectDb().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
