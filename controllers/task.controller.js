const Task = require('../models/task.model')
let taskCache = null
let lastCacheTime = null
exports.getAllTasks = async(req,res)=>{
    const now = Date.now()
    if(taskCache && (now-lastCacheTime<60000)){
        return res.status(200).json({data: taskCache,
            source: 'cache'
        })
    }
    const tasks = await Task.find()
    taskCache = tasks;
    lastCacheTime = now;
    res.status(200).json({data: tasks, source:'database'})
}
exports.createTask = async(req,res)=>{
    const task = await Task.create(req.body)
    taskCache = null
    res.status(201).json(task)
}