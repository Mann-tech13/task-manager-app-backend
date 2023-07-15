const router = require("express").Router();
const {
  getTasks,
  addTasks,
  updateTasks,
  deleteTasks,
} = require("../service/tasksImpl");

router.get("/t/getTasks", getTasks);
router.post("/t/addTasks", addTasks);
router.put("/t/updateTasks", updateTasks);
router.delete("/t/deleteTasks", deleteTasks);

// // GET all tasks
// router.get("/tasks", async (req, res) => {
//     try {
//       const tasks = await Task.find();
//       res.json(tasks);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

//   // GET a single task by ID
//   router.get("/tasks/:id", getTask, (req, res) => {
//     res.json(res.task);
//   });

//   // CREATE a new task
//   router.post("/tasks", async (req, res) => {
//     const task = new Task({
//       title: req.body.title,
//       description: req.body.description,
//     });

//     try {
//       const newTask = await task.save();
//       res.status(201).json(newTask);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });

//   // UPDATE a task by ID
//   router.put("/tasks/:id", getTask, async (req, res) => {
//     if (req.body.title != null) {
//       res.task.title = req.body.title;
//     }
//     if (req.body.description != null) {
//       res.task.description = req.body.description;
//     }

//     try {
//       const updatedTask = await res.task.save();
//       res.json(updatedTask);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });

//   // DELETE a task by ID
//   router.delete("/tasks/:id", getTask, async (req, res) => {
//     try {
//       await res.task.remove();
//       res.json({ message: "Task deleted" });
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

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
