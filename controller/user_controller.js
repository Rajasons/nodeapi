const {UserModel,setToken} = require('../modles/user_model');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');


const UserRegister = async(req,res)=>{

    try{

        const {Name,Email,Password,Mobile,Gender} = req.body;

        if(!Name || !Email  || !Password || !Mobile || !Gender) return res.status(400).json({message  : "Please Fill All Fields"});

            const err = validationResult(req);

            if(!err.isEmpty()) return res.status(400).json({error : err.array()});

        const isexist =  await UserModel.findOne({Email});  


        if(isexist) return res.status(400).json({message :  "Email Already Exist"});

        const haspassword = await bcrypt.hash(Password,8);

        const user = await UserModel.create({
            Name,
            Email,
            Password : haspassword,
            Mobile,
            Gender
        });
        
        const token = jwt.sign({"email": Email},"satish@123");
        setToken(Email,token);
        if(user) return res.status(200).json({message : "Registration SuccessFull",token : token});  

    }catch(err){
        return res.status(400).json({message :  err.message});
    }
             
}


const UserLogin = async(req,res)=>{

    const {Email,Password} = req.body;

    if(!Email  || !Password ) return res.status(400).json({message  : "Please Fill All Fields"});

    const isexist =  await UserModel.findOne({Email});  

    if(!isexist) return res.status(400).json({message :  "Invalid Email"});

    const ismatch = await bcrypt.compare(Password,isexist.Password);

    if(!ismatch) return res.status(400).json({message : "Invalid Password" });


    const token =  jwt.sign({"email":Email},'satish@123');
    setToken(Email,token);
    if(isexist) return res.status(200).json({message : "Login Successfull",token : token});

}


const FetchUser = async(req,res)=>{

    const data = await UserModel.find({});

    if(!data) return res.status(400).json({message : "No Data Found"});

    if(data)  return res.status(200).json({ data : data });

}


module.exports = { 

    UserRegister,
    UserLogin,
    FetchUser,
    
};