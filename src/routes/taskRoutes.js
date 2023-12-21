const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
// const authMiddleware = require('../middleware/authMiddleware');

// Middleware to authenticate requests
// router.use(authMiddleware.authenticateUser);

// Routes for task management
router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
