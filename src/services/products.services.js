//const { Schemas } = require("../schemas");
//const { Product, Category } = Schemas;
const pool = require("../database");
const productsServices = {};

productsServices.getProductsFromDatabase = async () => {
   let products
    try {
        products = await pool.query("SELECT * FROM Products");
    }catch(error){
        return error
    }
    return products;
};

productsServices.getProductById = async (productId) => {
    try{
        const product = await Product.findById(productId)
        return product
    }catch(error){
        return error
    }
}

productsServices.createProduct = async (productInfo) => {
    try{
        const category = await Category.find({title: productInfo.category})
        productInfo.category = category
        const product = new Product(productInfo);
        const savedproduct = await product.save();
        return savedproduct
    }catch(error){
        return error
    }
};

productsServices.createMultipleProducts = async (productInfo) => {
    try {
        pool.query("INSERT INTO Projects SET ?", projects)
        const category = await Category.find({title: productInfo.category})
        return category
    } catch (error) {

    }
}

productsServices.modifyProductById = async (productId, productInfo) => {
    try{
        const response = await Product.findByIdAndUpdate(productId, productInfo, {new: true})
        return response
    }catch(error){
        return error
    }
}

productsServices.deleteProductById = async (productId) => {
    try{
        const response = await Product.findByIdAndDelete(productId)
        return response
    }catch(error){
        return error
    }
}

module.exports = productsServices;
