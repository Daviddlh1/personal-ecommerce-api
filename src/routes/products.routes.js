const router = require("express").Router();
const { Controllers } = require("../controllers")
const productsControllers = Controllers.Products

router.get("/getProducts", productsControllers.getProjects)

module.exports = router