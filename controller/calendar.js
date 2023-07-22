const router = require("express").Router();
const {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
} = require("../service/calendarImpl");

router.get("/getEvents", getEvents);
router.post("/addEvent", addEvent);
router.put("/updateEvent/:id", updateEvent);
router.delete("/deleteEvent/:id", deleteEvent);

module.exports = router;
