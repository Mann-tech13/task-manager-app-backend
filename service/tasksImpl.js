const TaskSchema = require("../models/PlanModel");
const { ObjectId } = require("mongodb");
const handleError = require("../utils/error");


exports.getTasks = async (req, res) => {
  try {
    const findTask = await TaskSchema.find({});
    res.status(200).json(findTask);
  } catch (error) {
    handleError(error, res);
  }
};

exports.addTasks = async (req, res) => {
  try {
    const newTask = await TaskSchema.create(req.body);
    res.status(200).json(newTask);
  } catch (error) {
    handleError(error, res);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const id = req.params;
    await TaskSchema.findByIdAndUpdate(new ObjectId(id), req.body);
    const updatedTask = await TaskSchema.findById(new ObjectId(id));
    res.status(200).json(updatedTask);
  } catch (error) {
    handleError(error, res);
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const id = req.params;
    const getTask = await TaskSchema.findById(new ObjectId(id));
    res.status(200).json(getTask);
  } catch (error) {
    handleError(error, res);
  }
};


exports.deleteTasks = async (req, res) => {
  try {
    const id = req.params;
    const deleteTask = await TaskSchema.findByIdAndDelete(new ObjectId(id));
    res.status(200).json(deleteTask);
  } catch (error) {
    handleError(error, res);
  }
};
