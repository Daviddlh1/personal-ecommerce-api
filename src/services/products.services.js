const { default: mongoose } = require("mongoose");
const { Schemas } = require("../schemas");
const { Product } = Schemas;
const productsServices = {};

productsServices.getProductsFromDatabase = async () => {
    try {
        const products = await Product.find({});
        return products;
    }catch(error){
        return error
    }
};

productsServices.createProduct = async (productInfo) => {
  const product = new Product(productInfo);
  const savedproduct = await product.save();
  return savedproduct
};

module.exports = productsServices;
