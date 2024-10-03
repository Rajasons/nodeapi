const { json } = require('body-parser');
const CartModel = require('../modles/cart_model');
const {UserModel} = require("../modles/user_model");

const adddToCart = async(req,res)=>{

    const {Pid} = req.body;
    const Uemail = req.email;
    // const isexist = await ProductModel.findOne({Pname});
    // if(isexist) return res.status(400).json({Message : "Already Exist"});
    await CartModel.create({
        Pid,
        Uemail
    });

    res.status(200).json({Message : "added"});

}

const getCartProductUserVise = async(req,res)=>{

        const Email = req.email;

        //const Pid = req.body;

         const userdata = await UserModel.findOne({'Email':Email});

         const data = await CartModel.find({"Uemail":Email}).populate("Pid");

        if(!data) return res.status(400).json({Message  : "No Data Found"});

//    const Userdata = await UserModel.find({"Email" : Uemail});

//    const  ProductData = await ProductModel.find({"_id":Pid});

      res.status(200).json({UserData : userdata ,data1 :data});


}
 
module.exports = {
    adddToCart,  
    getCartProductUserVise,
}