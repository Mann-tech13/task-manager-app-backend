const mongoose = require("mongoose");

let isConnected = false;
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7tfcuh6.mongodb.net/${process.env.DB_NAME}`;

const connectDB = async () => {
  if (isConnected) return;

  await mongoose.connect(url);
  isConnected = true;
  console.log("MongoDB connected");
};

module.exports = connectDB;
