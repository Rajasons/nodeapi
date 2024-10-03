const {getToken} = require('../modles/user_model');
const jwt = require('jsonwebtoken');
const {check} = require('express-validator');


function RegisterValidation(){

        return[

            check("Name","Name Is Require").not().isEmpty(),
            check("Email","Enter Valid Email").isEmail(),
            check("Password","Password must be Strong").isStrongPassword({
                minLength:6,
                minLowercase:1,
                minUppercase:1,
                minNumbers:1,
                minSymbols:1

             }),
            check("Mobile","Enter Valid Mobiile Number").isLength({
                min:10,
                max:10
            })
            
        ];
    
}

 function VerifyData(req,res,next) {

        const token = req.headers['authorization']?.split(' ')[1];

        console.log("token == "+ token);

        if(!token) return res.status(400).json({message : "Token Not Found"});

        jwt.verify(token,'satish@123',(err,data)=>{

                if(err) return res.status(400).json({message : err.message});

                const storedToken = getToken(data.email);

                if(!storedToken || storedToken !== token){

                    return res.status(400).json({message : "Invalid Token"});
                }

                req.email = data.email;
                next();
        });  

 }

module.exports = {
    RegisterValidation,
    VerifyData,
};    

