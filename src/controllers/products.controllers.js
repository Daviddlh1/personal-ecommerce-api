const { Schemas } = require("../schemas");
const { Services } = require("../services");
const productsServices = Services.Products
const productsControllers = {};

productsControllers.getProductsFromApi = (req, res) => {
  try {
    console.log("Hello from getProjects route");
    res.status(200).json("entré");
  } catch(error) {
    console.error(error)
  }
};

productsControllers.getProductsFromDatabase = async (req, res) => {
  try {
    const response = await productsServices.getProductsFromDatabase()
    return res.status(200).json(response)
  } catch(error) {
    console.error(error)
  }
}

productsControllers.getProductById = async (req, res, next) => {
  try {
    const {id} = req.params
    const response = await productsServices.getProductById(id)
    if(!response.name) {
      return res.status(200).json(response)
    }else {
      next(response)
    }
  } catch(error) {
    next(error)
  }
}

productsControllers.createProduct = async (req, res) => {
  try {
    const response = await productsServices.createProduct(req.body)
    return res.status(201).json(response)
  } catch(error) {
    console.error(error)
  }
}

productsControllers.modifyProductById = async (req, res) => {
  try {
    const {id} = req.params
    const ProductInfo = req.body
    const response = await productsServices.modifyProductById(id, ProductInfo)
    res.status(200).json(response)
  } catch(error) {
    console.error(error)
  }
}

productsControllers.deleteProductById = async (req, res) => {
  try {
    const {id} =req.params
    const response = await productsServices.deleteProductById(id)
    res.status(200).json(response)
  } catch(error) {
    console.error(error)
  }
}

module.exports = productsControllers;
