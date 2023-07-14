const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

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

app.listen(8000, (res, err) => {
    console.log("Server listening on Port", 8000);
})