const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
// Yahan auth middleware import karna agar banaya hai, varna direct controller use karo
router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);

module.exports = router;