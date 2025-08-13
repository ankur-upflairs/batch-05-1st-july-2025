var express = require('express');
var mongoose = require('mongoose')
var dotenv = require('dotenv')
var cors = require('cors')

dotenv.config()
mongoose.connect(process.env.DB_URI)
.then(()=>console.log('db connected'))
let courseRouter = require('./routes/courseRoute')
let assignmentRouter = require('./routes/assignmentRoutes')

var app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/courses',courseRouter)
app.use('/assignments',assignmentRouter)

app.listen(3000,'',()=>{
    console.log('server is running on port 3000')
})