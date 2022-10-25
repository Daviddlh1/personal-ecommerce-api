const { Services } = require("../services")
const categoriesServices = Services.Categories
const categoriesControllers = {}

categoriesControllers.createCategory = async (req, res) => {
    try {
        const response = await categoriesServices.createCategory(req.body)
        return res.status(200).json(response)
    } catch (error) {
        console.error(error)
    }
}

categoriesControllers.getCategories = async (req, res) => {
    try {
        const response = await categoriesServices.getCategories()
        return res.status(200).json(response)
    }catch(error){
        console.error(error)
    }
}

module.exports = categoriesControllers