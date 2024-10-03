const express = require('express');
const mongoose = require('mongoose');
const UserRoute = require('./routes/user_routes');
const ProductRoute = require("./routes/product_routes");
const CartRoute = require("./routes/cart_routes");
const bodeparser = require('body-parser');
const app = express();

app.use(express.json());
app.use(bodeparser.json());
 
app.get("/",async(req,res)=>{
    res.send("Hii Satish ");  
});
// conection.Connection();

app.use("/api/user",UserRoute);

app.use("/api/product",ProductRoute);

app.use("/api/cart",CartRoute);

mongoose.connect("mongodb+srv://rajsonsit:OPInynsinxsj9ePC@backend.f0fz4.mongodb.net/?retryWrites=true&w=majority&appName=backend").then(()=>{
    console.log("connected");
    app.listen(3000,()=>{
        console.log("server run on port 3000");
    });
}).catch((err)=>{
    console.log("Not Connected");
});



