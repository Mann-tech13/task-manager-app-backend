const router = require("express").Router();
const {
  getTasks,
  addTasks,
  updateTask,
  deleteTasks,
  getTaskById,
} = require("../service/tasksImpl");

router.get("/getTasks", getTasks);
router.post("/addTasks", addTasks);
router.put("/updateTask/:id", updateTask);
router.get("/getTask/:id", getTaskById);
router.delete("/deleteTasks/:id", deleteTasks);

module.exports = router;
