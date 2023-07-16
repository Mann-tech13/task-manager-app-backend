const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const controller = require("./controller/task.js");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", controller);

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7tfcuh6.mongodb.net/${process.env.DB_NAME}`
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
