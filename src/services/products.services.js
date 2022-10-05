const { Schemas } = require("../schemas");
const { Product, Category } = Schemas;
const productsServices = {};

productsServices.getProductsFromDatabase = async () => {
    try {
        const products = await Product.find({});
        return products;
    }catch(error){
        return error
    }
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
        console.log(productInfo)

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
