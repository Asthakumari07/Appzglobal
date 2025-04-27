const express = require("express");
const app = express();
const path = require("path");
const authRouter = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const applicationRoute = require("./router/application-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
require("dotenv").config();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

// Path to the build directory
const buildpath = path.join(__dirname, "../Client/dist");

// Serve static files from the build directory
app.use(express.static(buildpath));

// Serve static files from the 'assets' folder inside 'dist'
app.use("/assets", express.static(path.join(buildpath, "assets")));

// Enable CORS for all origins
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use("/api/application", applicationRoute);
app.use("/api/admin", adminRoute);

// Start the server
const PORT = process.env.PORT || 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
