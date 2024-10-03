const mongoose = require('mongoose');


const CartSchema = mongoose.Schema(
    {
        Pid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'TblProduct',
            require:true
        },
        Uemail:{
            type:String,
            require:true,
        }
    }
);

const CartModel = mongoose.model("TblCart",CartSchema);

module.exports = CartModel;