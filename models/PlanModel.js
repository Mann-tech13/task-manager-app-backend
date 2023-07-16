const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
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
  }
});

const TaskSchema = mongoose.model("Task", taskSchema);
module.exports = TaskSchema;
