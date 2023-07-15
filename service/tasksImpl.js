const { TaskSchema } = require("../models/TaskModel");
exports.getTasks = async (req, res) => {
  res.send("GET Connected");
};

exports.addTasks = async (req, res) => {
  res.send("ADD Connected");
};

exports.updateTasks = async (req, res) => {
  res.send("UPDATE Connected");
};

exports.deleteTasks = async (req, res) => {
  res.send("DELETE Connected");
};
