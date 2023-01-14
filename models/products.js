const mongoose = require("mongoose");

//Creating a schema for our products which is the blueprint for the models
const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

//Creating a model >> unsing the schema
//It takes 2 arguments, first is the name of the collection, "Product" will be automatically converted to "products"
const ProductsModel = mongoose.model("Product", productsSchema);

//Exporting the model to use it in the app
module.exports = ProductsModel;
