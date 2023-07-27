const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  userId:{
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  description:{
    type: String,
  },
  priority:{
    type: String,
    enum: ['P1', 'P2', 'P3'],
    default: 'P1',
  },
  category: {
    type: String,
    enum: ['OPEN', 'PROGRESS', 'RESOLVED'],
    default: 'OPEN',
  },
  createdAt: {
    type: Number,
    required: true,
  }
});

const TaskSchema = mongoose.model("Task", taskSchema);
module.exports = TaskSchema;
