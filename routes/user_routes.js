const express = require('express');
const  UserRoute = express.Router();
const {RegisterValidation,VerifyData} = require('../middleware/user_middleware');
const {UserRegister, UserLogin,FetchUser } = require("../controller/user_controller");

UserRoute.post("/register",RegisterValidation(),UserRegister);

UserRoute.post("/login",UserLogin);

UserRoute.get("/fetchUser",VerifyData,FetchUser);

module.exports = UserRoute;