const mongoose = require('mongoose');

const Users = {};

const UserSchema = mongoose.Schema(
    {
            Name :{
                type : String,
                required:true,
            },
            Email :{
                type : String,
                required:true,
            },
            Password :{
                type : String,
                required:true,
            },
            Mobile :{
                type : Number,
                required:true,
                length:10,
            },
            Gender:{
                type:String,
                required:true
            }
    },
    {
        timestamp : true
    }
);

function setToken(email,token){
        if(email){
                Users[email] = {token};
        }
}

const getToken = (email) =>  {

        const Usertoken = Users[email];

        if(!Usertoken) return null;

        return Usertoken.token;

};

const UserModel = mongoose.model("TblUser",UserSchema);

module.exports = {
    UserModel,
    setToken,
    getToken,
};