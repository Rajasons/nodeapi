const { craeteProduct,fetchProductUservise } = require("../controller/product_controller");
const { VerifyData } = require('../middleware/user_middleware');

const express = require("express");
const ProductRoute = express.Router();

ProductRoute.post("/addProduct",VerifyData,craeteProduct);

ProductRoute.get("/getProductUserVise",VerifyData,fetchProductUservise);

module.exports = ProductRoute;