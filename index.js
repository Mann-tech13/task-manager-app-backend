const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const controller = require("./controller/task.js");
require('dotenv').config({ path: __dirname + '/.env' });

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", controller);

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log("Server running on "+process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
