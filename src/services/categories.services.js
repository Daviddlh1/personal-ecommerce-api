const pool = require("../database");
const categoriesServices = {}

categoriesServices.createCategory = async (categoryInfo) => {
    const data = await pool.query("INSERT INTO Categories SET ?", [categoryInfo])
    return data
}

categoriesServices.getCategories = async () => {
    const data = await pool.query("SELECT * FROM Categories")
    return data
}

module.exports = categoriesServices