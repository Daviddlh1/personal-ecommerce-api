const { Schemas } = require("../schemas")
const { Category } = Schemas
const categoriesServices = {}

categoriesServices.createCategory = async (categoryInfo) => {
    try {
        const category = new Category(categoryInfo)
        const savedCategory = await category.save()
        return savedCategory
    } catch(error) {
        return error
    }
}

module.exports = categoriesServices