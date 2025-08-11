const Tasks = require('../data.js')
const Task = require('../models/taskModel.js')




exports.getAllTasks =async (req,res)=>{
    let tasks = await Task.find()
    res.json({tasks})
}

exports.createTask =async (req,res)=>{
    let {title,description,date} = req.body
    let task = new Task()
    task.title =title
    task.description = description
    task.date = date 
    await task.save()
    res.send({task:req.body,message:'new task created'})
}

exports.updateTask =async (req,res)=>{
    let {title,description,date} = req.body
    let {id} = req.params
    await Task.findByIdAndUpdate(id,{title,description,date})
    res.send('task updated')
}
exports.deleteTask = async (req,res)=>{ 
    let {id} = req.params
    await Task.findByIdAndDelete(id)
    res.send(`task deleted with id ${req.params.id}`)
}

