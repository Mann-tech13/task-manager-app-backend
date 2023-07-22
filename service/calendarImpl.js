const CalendarSchema = require("../models/CalendarModel");
const { ObjectId } = require("mongodb");
const handleError = require("../utils/error");


exports.getEvents = async (req, res) => {
  try {
    const findEvents = await CalendarSchema.find({});
    res.status(200).json(findEvents);
  } catch (error) {
    handleError(error, res);
  }
};

exports.addEvent = async (req, res) => {
  try {
    const newEvent = await CalendarSchema.create(req.body);
    res.status(200).json(newEvent);
  } catch (error) {
    handleError(error, res);
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const id = req.params;
    await CalendarSchema.findByIdAndUpdate(new ObjectId(id), req.body);
    const updatedTask = await CalendarSchema.findById(new ObjectId(id));
    res.status(200).json(updatedTask);
  } catch (error) {
    handleError(error, res);
  }
};


exports.deleteEvent = async (req, res) => {
  try {
    const id = req.params;
    const deleteEvent = await CalendarSchema.findByIdAndDelete(new ObjectId(id));
    res.status(200).json(deleteEvent);
  } catch (error) {
    handleError(error, res);
  }
};
