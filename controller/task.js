const router = require("express").Router();
const {
  getTasks,
  addTasks,
  updateTask,
  deleteTasks,
  getTaskById,
} = require("../service/tasksImpl");

router.get("/t/getTasks", getTasks);
router.post("/t/addTasks", addTasks);
router.put("/t/updateTask/:id", updateTask);
router.get("/t/getTask/:id", getTaskById);
router.delete("/t/deleteTasks/:id", deleteTasks);


// Middleware function to get a single task by ID
// async function getTask(req, res, next) {
//   let task;
//   try {
//     task = await Task.findById(req.params.id);
//     if (task == null) {
//       return res.status(404).json({ message: "Task not found" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.task = task;
//   next();
// }

module.exports = router;
