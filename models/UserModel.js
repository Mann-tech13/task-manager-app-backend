const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

const UserSchema = mongoose.model("User", userSchema);
module.exports = UserSchema;
