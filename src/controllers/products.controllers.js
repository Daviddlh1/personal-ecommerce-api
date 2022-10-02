const { Schemas } = require("../schemas")
const { Product } = Schemas
const { Services } = require("../services");
const productsServices = Services.Products
const productsControllers = {};

productsControllers.getProjects = (req, res) => {
  console.log("Hello from getProjects route");
  res.status(200).json("entré");
};

productsControllers.getProductsFromDatabase = async (req, res) => {
  try {
    const response = await productsServices.getProductsFromDatabase()
    return res.status(200).json(response)
  }catch(error){
    console.error(error)
  }
}

productsControllers.createProduct = async (req, res) => {
  const response = await productsServices.createProduct(req.body)
  return res.status(201).json(response)
}


module.exports = productsControllers;
