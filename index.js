const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const taskController = require("./controller/task.js");
const calendarController = require("./controller/calendar.js");
const userController = require("./controller/user.js");
const crypto = require('crypto');

// Generate a random 256-bit key (32 bytes)
const secretKey = crypto.randomBytes(32).toString('hex');

console.log(secretKey);


require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/t", taskController);
app.use("/c", calendarController);
app.use("/u", userController);

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7tfcuh6.mongodb.net/${process.env.DB_NAME}`;

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log("Server running on " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
