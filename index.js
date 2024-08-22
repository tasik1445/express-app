//First Express App
const express = require('express');
const app = express();

app.get('/one', function (req,res){
    res.end("Hello Express GET Method!");
})

app.put('/two', function (req,res){
    res.end("Hello Express PUT Method!");
})

app.post('/three', function (req,res){
    res.end("Hello Express POST Method!");
})

app.patch('/four', function (req,res){
    res.end("Hello Express PATCH Method!");
})

app.delete('/five', function (req,res){
    res.end("Hello Express DELETE Method!");
})

//Run & Build & Check
app.listen(3000, function (){
    console.log("Listening on port 8080");
})
