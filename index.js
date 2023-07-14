const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const controller = require('./controller/task.js');

const app = express();

app.use(express.json());
app.use(cors())

app.use('/', controller);

mongoose
  .connect("mongodb://localhost:27017/planify")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(8080, () => {
      console.log("Port on 8080");
    });
  })
  .catch((err) => {
    console.log(err);
  });