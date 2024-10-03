const { adddToCart ,getCartProductUserVise} = require("../controller/cart_controller");
const { VerifyData } = require('../middleware/user_middleware');

const express = require("express");
const CartRoute = express.Router();

CartRoute.post("/addtocart",VerifyData,adddToCart);

CartRoute.get("/get",VerifyData,getCartProductUserVise);

// ProductRoute.get("/getProductUserVise",VerifyData,fetchProductUservise);

module.exports = CartRoute;