var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/mbooks').then(()=>{
    console.log('DB Connected');
    
    var app = express();
    app.use(bodyparser.urlencoded({extend:false}))
    app.listen(3000,()=>{
        console.log("Server Started 3000")
    })
}).catch((e)=>{
    console.log("DB Not Connected")
})