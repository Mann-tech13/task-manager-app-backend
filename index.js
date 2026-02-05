const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const taskController = require("./controller/task.js");
const calendarController = require("./controller/calendar.js");
const userController = require("./controller/user.js");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.use("/t", taskController);
app.use("/c", calendarController);
app.use("/u", userController);

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7tfcuh6.mongodb.net/${process.env.DB_NAME}`;

app.get("/ping", (req, res) => {
  res.json({ ok: true });
});

module.exports = app;
