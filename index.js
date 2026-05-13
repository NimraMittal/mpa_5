const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/user', userRoutes);
app.use('/api/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connect to Mongoose"))

.catch((err)=> console.error("MongoDB connection error", err));

app.get('/', (req,res)=>{
    res.send("Task Manager API is running...")
})

const PORT = process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})