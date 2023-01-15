const mongoose = require("mongoose");

const Product = require("./models/products");

//This method connects to a database and returns a promise
mongoose
  .connect("Copy url from mogodb atlas")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// >> Function for creating a product and sending apost request
const createProduct = async (req, res, next) => {
  //The model Product is a constructor function, so to create a new document we basically create a new instance of that model based on the decalred schema
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  //Saving the created products
  const result = await createdProduct.save();

  //Returning a response to the request
  res.json(result);
};

// >> Function for getting all the products in a database and sending a get request
const getProducts = async (req, res, next) => {
  //Calling the find() method directly on the Product model constructor to get all the documents in the products collection.
  // The exec method converts the result from find() method into a promise
  const products = await Product.find().exec();

  res.json({ products });
};
exports.createProduct = createProduct;
exports.getProducts = getProducts;
