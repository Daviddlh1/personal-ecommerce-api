const router = require("express").Router()
const { Controllers } = require("../controllers")
const categoriesControllers = Controllers.Categories

router.post("/createCategory", categoriesControllers.createCategory)

module.exports= router