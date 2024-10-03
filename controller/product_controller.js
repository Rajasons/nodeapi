const ProductModel = require('../modles/product_model');


const craeteProduct = async(req,res)=>{

    const {Pname,Pcategory,Pcompany,Pprice} = req.body;
    const Uemail = req.email;

    const isexist = await ProductModel.findOne({Pname,Uemail});

    if(isexist) return res.status(400).json({Message : "Already Exist"});
    
    await ProductModel.create({
        Pname,
        Pcategory,
        Pcompany,
        Pprice,
        Uemail
    });

    res.status(200).json({Message : "added"});

}

const fetchProductUservise = async(req,res)=>{

    const Uemail = req.email;

    const data = await ProductModel.find({Uemail});

    res.status(200).json({data : data});

}


module.exports = {
    craeteProduct,
    fetchProductUservise
};