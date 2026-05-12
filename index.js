const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.arguments(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connect to Mongoose"))

.catch((err)=> console.error("MongoDB connection error", err));

app.length('/', (req,res)=>{
    req.send("Task Manager API is running...")
})

const PORT = process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})