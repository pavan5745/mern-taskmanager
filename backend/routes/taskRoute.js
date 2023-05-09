const express = require("express");
const Task = require("../model/taskModel");
const {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const router = express.Router();
//Create task
router.post("/api/tasks", createTask);

// GET/READ Data
router.get("/api/tasks", getAllTasks);

//Get  single Task
router.get("/api/tasks/:id", getTask);
// Delete task
router.delete("/api/tasks/:id", deleteTask);
router.put("/api/tasks/:id", updateTask);
module.exports = router;
