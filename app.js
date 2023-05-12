const mongoose=require('mongoose');
const cors=require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const userRoute=require("./routers/users");
const coursesRoute=require("./routers/courses");
const detailsRoute=require("./routers/details")
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use('/users', userRoute);
app.use('/courses', coursesRoute);
app.use('/details', detailsRoute);
app.get("/",(req,res)=>{
  res.send("we are on home");
})

console.log(process.env.DB_CONNECTION);
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true}).catch(err=>console.log(err.reason));

app.listen(3000);