const TaskSchema = require("../models/PlanModel");
const { ObjectId } = require("mongodb");
const {handleError} = require("../utils/extend");
const {validateAndGetUserIdFromAccessToken} = require("../utils/extend");

const getTasks = async (req, res) => {
  try {
    const accessTokenSplit = req.headers.authorization;
    const accessToken = accessTokenSplit.split(" ")[1]
    // console.log(validateAndGetUserIdFromAccessToken);
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    console.log(userId);
    if(userId) {
      const findTask = await TaskSchema.find({ userId });
      res.status(200).json(findTask);
    }
  } catch (error) {
    // console.log(error);
    // console.log("*******************************");
    handleError(error, res);
  }
};

const addTasks = async (req, res) => {
  try {
    const { title, projectName, description, priority, category, createdAt } =
      req.body;
    const accessToken = req.headers.authorization;
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    if (userId) {
      const task = {
        userId: userId,
        title: title,
        projectName: projectName,
        description: description,
        priority: priority,
        category: category,
        createdAt: createdAt,
      };

      const newTask = await TaskSchema.create(task);
      res.status(200).json(newTask);
    }
  } catch (error) {
    handleError(error, res);
  }
};

const updateTask = async (req, res) => {
  try {
    const { title, projectName, description, priority, category, createdAt } =
      req.body;
    const id = req.params;
    const accessToken = req.headers.authorization;
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    if (userId) {
      const task = {
        userId: userId,
        title: title,
        projectName: projectName,
        description: description,
        priority: priority,
        category: category,
        createdAt: createdAt,
      };
      await TaskSchema.findByIdAndUpdate(new ObjectId(id), task);
      const updatedTask = await TaskSchema.findById(new ObjectId(id));
      res.status(200).json(updatedTask);
    }
  } catch (error) {
    handleError(error, res);
  }
};

const getTaskById = async (req, res) => {
  try {
    const accessToken = req.headers.authorization;
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    if (userId) {
      const id = req.params;
      const getTask = await TaskSchema.findById(new ObjectId(id));
      res.status(200).json(getTask);
    }
  } catch (error) {
    handleError(error, res);
  }
};

const deleteTasks = async (req, res) => {
  try {
    const accessToken = req.headers.authorization;
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    if(userId) {
      const id = req.params;
      const deleteTask = await TaskSchema.findByIdAndDelete(new ObjectId(id));
      res.status(200).json(deleteTask);
    }
  } catch (error) {
    handleError(error, res);
  }
};

const deleteResolvedTasks = async (req, res) => {
  try {
    const accessToken = req.headers.authorization;
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    if(userId){
      const deleteResolved = await TaskSchema.deleteMany({
        category: "RESOLVED",
      });
      res.status(200).json(deleteResolved);
    }
  } catch (error) {
    handleError(error, res);
  }
};

module.exports = {
  getTasks,
  addTasks,
  updateTask,
  getTaskById,
  deleteTasks,
  deleteResolvedTasks,
};
