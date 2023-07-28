const CalendarSchema = require("../models/CalendarModel");
const { ObjectId } = require("mongodb");
const { handleError } = require("../utils/extend");
const { validateAndGetUserIdFromAccessToken } = require("../utils/extend");

exports.getEvents = async (req, res) => {
  try {
    const accessTokenSplit = req.headers.authorization;
    const accessToken = accessTokenSplit.split(" ")[1];
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    if (userId) {
      const findEvents = await CalendarSchema.find({ userId });
      res.status(200).json(findEvents);
    }
  } catch (error) {
    handleError(error, res);
  }
};

exports.addEvent = async (req, res) => {
  try {
    const { title, description, start, end, createdAt } = req.body;
    const accessTokenSplit = req.headers.authorization;
    const accessToken = accessTokenSplit.split(" ")[1];
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    if (userId) {
      const event = {
        userId: userId,
        title: title,
        description: description,
        start: start,
        end: end,
        createdAt: createdAt,
      };
      const newEvent = await CalendarSchema.create(event);
      res.status(200).json(newEvent);
    }
  } catch (error) {
    handleError(error, res);
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { title, description, start, end, createdAt } = req.body;
    const id = req.params;
    const accessTokenSplit = req.headers.authorization;
    const accessToken = accessTokenSplit.split(" ")[1];
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    if (userId) {
      const event = {
        userId: userId,
        title: title,
        description: description,
        start: start,
        end: end,
        createdAt: createdAt,
      };
      await CalendarSchema.findByIdAndUpdate(new ObjectId(id), req.body);
      const updatedTask = await CalendarSchema.findById(new ObjectId(id));
      res.status(200).json(updatedTask);
    }
  } catch (error) {
    handleError(error, res);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const accessTokenSplit = req.headers.authorization;
    const accessToken = accessTokenSplit.split(" ")[1];
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    if (userId) {
      const id = req.params;
      const deleteEvent = await CalendarSchema.findByIdAndDelete(
        new ObjectId(id)
      );
      res.status(200).json(deleteEvent);
    }
  } catch (error) {
    handleError(error, res);
  }
};
