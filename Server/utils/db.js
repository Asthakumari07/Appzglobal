const mongoose = require("mongoose");

const URI =
  "mongodb+srv://asthas274:Astha011221@cluster0.bntnmwd.mongodb.net/feedback";

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB connection successful");

    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to DB");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Mongoose connection error:", err);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
