const Tasks = require('../data.js')

exports.getAllTasks = (req,res)=>{
    res.json({tasks:Tasks})
}

exports.createTask =(req,res)=>{
    // console.log(req.body)
    Tasks.push(req.body)
    res.send({task:req.body,message:'new task created'})
}

exports.updateTask = (req,res)=>{
    let params = req.params
    // console.log(params)
    res.send('task updated')
}
exports.deleteTask = (req,res)=>{    
    res.send(`task deleted with id ${req.params.id}`)
}

