const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema(
    {
        Pname :{
            type : String,
            require : true
        },
        Pcategory :{
            type : String,
            require : true
        },
        Pcompany :{
            type : String,
            require : true
        },
        Pprice:{
            type : String,
            require : true
        },
        Uemail:{
            type:String,
            require:true,
        }
    }
);

const ProductModel = mongoose.model("TblProduct",ProductSchema);

module.exports = ProductModel;