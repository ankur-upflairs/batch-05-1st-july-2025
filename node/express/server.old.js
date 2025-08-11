const express = require('express')
const Tasks = require('./data.js')

const app = express()

// app.use((req,res,next)=>{
//     console.log(req.ip)
//     next()
// })
app.use(express.json()) //handle json data
app.use(express.urlencoded())//handle form data

//to get all tasks
app.get('/tasks',(req,res)=>{
    res.json({tasks:Tasks})
})
//to create a task
app.post('/tasks',(req,res)=>{
    // console.log(req.body)
    Tasks.push(req.body)
    res.send({task:req.body,message:'new task created'})
})

//dynamic routing
// to update a task 
app.put('/tasks/:id',(req,res)=>{
    let params = req.params
    // console.log(params)
    res.send('task updated')
})
// to delete a task 
app.delete('/tasks/:id',(req,res)=>{    
    res.send(`task deleted with id ${req.params.id}`)
})

app.listen(3000,'',()=>{
    console.log('server is running on port 3000')
})

// app.get('/tasks',(req,res)=>{
//     res.send('this is all tasks api')
// })
// app.post('/tasks',(req,res)=>{
//     res.send('new task created')
// })
// //dynamic routing
// app.put('/tasks/:id',(req,res)=>{
//     let params = req.params
//     // console.log(params)
//     res.send('task updated')
// })
// app.delete('/tasks/:id',(req,res)=>{    
//     res.send(`task deleted with id ${req.params.id}`)
// })

// app.listen(3000,'',()=>{
//     console.log('server is running on port 3000')
// })
