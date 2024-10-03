const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.get("/",async(req,res)=>{
    res.send("Hii satish what are you doing");  
});


function Connection(){
    mongoose.connect("mongodb+srv://rajsonsit:OPInynsinxsj9ePC@backend.f0fz4.mongodb.net/?retryWrites=true&w=majority&appName=backend").then(()=>{
        console.log("connected");
        app.listen(3000,()=>{
            console.log("server run on port 3000");
        });
    }).catch((err)=>{
        console.log("Not Connected");
    });3.

}


module.exports = {Connection};