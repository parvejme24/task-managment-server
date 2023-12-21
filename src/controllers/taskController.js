const Task = require('../models/Task');

// Get all tasks for the authenticated user
exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// Create a new task for the authenticated user
exports.createTask = async (req, res, next) => {
  try {
    const { title, description, deadline, priority } = req.body;

    // Create a new task
    const newTask = new Task({
      title,
      description,
      deadline,
      priority,
      userId: req.user.id,
    });

    // Save the task to the database
    await newTask.save();

    res.json({ message: 'Task created successfully' });
  } catch (error) {
    next(error);
  }
};

// Update a task for the authenticated user
exports.updateTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const { title, description, deadline, priority } = req.body;

    // Find the task by ID
    const task = await Task.findOne({ _id: taskId, userId: req.user.id });

    // Update task fields
    task.title = title;
    task.description = description;
    task.deadline = deadline;
    task.priority = priority;

    // Save the updated task to the database
    await task.save();

    res.json({ message: 'Task updated successfully' });
  } catch (error) {
    next(error);
  }
};

// Delete a task for the authenticated user
exports.deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;

    // Find and delete the task by ID
    await Task.findOneAndDelete({ _id: taskId, userId: req.user.id });

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    next(error);
  }
};
