const express = require('express')
const Tasks = require('./data.js')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const taskRouter = require('./routes/taskRoutes.js')
const app = express()

dotenv.config()
// console.log(process.env)
mongoose.connect(process.env.DB_URL)
.then(()=>{console.log('db connected')})
.catch(err=>console.log(err))

app.use(express.json()) //handle json data
app.use(express.urlencoded())//handle form data


app.use('/tasks',taskRouter)

app.listen(3000,'',()=>{
    console.log('server is running on port 3000')
})

