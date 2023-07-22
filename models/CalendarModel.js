const mongoose = require("mongoose");

const calendarSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type: String,
  },
  start:{
    type: Number,
    required: true,
  },
  end:{
    type: Number,
    required: true,
  },
  createdAt:{
    type: Number,
    required: true,
  }
});

const CalendarSchema = mongoose.model("Calendar", calendarSchema);
module.exports = CalendarSchema;
