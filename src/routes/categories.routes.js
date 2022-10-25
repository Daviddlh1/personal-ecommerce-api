const router = require("express").Router()
const { Controllers } = require("../controllers")
const categoriesControllers = Controllers.Categories

router.post("/createCategory", categoriesControllers.createCategory)
router.get("/getCategories", categoriesControllers.getCategories)

module.exports= router