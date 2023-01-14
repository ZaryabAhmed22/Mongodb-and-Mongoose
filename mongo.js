//Used to create a connection with the server where app will be running
const { MongoClient } = require("mongodb");

const url = "copy url fomr connect in mongodb atlas";

//Sending data to the Database
const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  //Telling the mongo client which url to connect with
  const client = new MongoClient(url);

  try {
    //Establishing the connection with mongoDB
    await client.connect();

    //Accessing a specific database
    const db = client.db();

    //Creaitng a collection
    const result = db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }

  //Closing the current connection
  client.close();

  //Sending the response
  res.json(newProduct);
};

const getProducts = async (req, res, next) => {
  //creating a new client
  const client = new MongoClient(url);

  //Creating a products variable to store products
  let products;

  try {
    //Establishing the connection with mongoDB
    await client.connect();

    //Accessing a specific database
    const db = client.db();

    //Creaitng a collection
    products = db.collection("products").find().toArray();
  } catch (error) {
    return res.json({ message: "Could not retrieve products" });
  }

  //Closing the current connection
  client.close();

  //Sending the response
  res.json(products);
};

//Exproting these functions so they can be used in app.js
exports.getProducts = getProducts;
exports.createProduct = createProduct;
