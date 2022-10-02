const router = require("express").Router();
const { Controllers } = require("../controllers");
const productsControllers = Controllers.Products;

router.get("/getProducts", productsControllers.getProjects);
router.get("/getProductsFromDatabase", productsControllers.getProductsFromDatabase)
router.post("/createProduct",productsControllers.createProduct)

module.exports = router;
