const mongoose = require("mongoose");
require("dotenv").config();



const dbConnect = async () => {
  
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

module.exports = dbConnect;
