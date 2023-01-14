const mongoose = require("mongoose");
const ProductModel = require("./models/products");

//Creating a product
const createProduct = async (req, res, next) => {
  //Creating a products using the model according to the schema >> models are basically object constructor functions therefore we create ints instance whenever we createa new data
  const createdProduct = new ProductModel({
    name: req.body.name,
    price: req.body.price,
  });
};

exports.createProduct = createProduct;
