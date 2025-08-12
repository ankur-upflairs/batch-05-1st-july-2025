var express = require('express');
var mongoose = require('mongoose')
var dotenv = require('dotenv')


dotenv.config()
mongoose.connect(process.env.DB_URI)
.then(()=>console.log('db connected'))
let courseRouter = require('./routes/courseRoute')


var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/courses',courseRouter)


app.listen(3000,'',()=>{
    console.log('server is running on port 3000')
})