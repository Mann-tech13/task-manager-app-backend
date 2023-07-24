const router = require("express").Router();
const {
  getTasks,
  addTasks,
  updateTask,
  deleteTasks,
  getTaskById,
  deleteResolvedTasks
} = require("../service/tasksImpl");

router.get("/getTasks", getTasks);
router.post("/addTasks", addTasks);
router.put("/updateTask/:id", updateTask);
router.get("/getTask/:id", getTaskById);
router.delete("/deleteTasks/:id", deleteTasks);
router.delete("/delete/resolved", deleteResolvedTasks);

module.exports = router;
