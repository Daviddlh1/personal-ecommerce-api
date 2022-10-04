const router = require("express").Router();
const { Controllers } = require("../controllers");
const productsControllers = Controllers.Products;

router.get("/getProducts", productsControllers.getProductsFromApi);
router.post("/createProduct",productsControllers.createProduct)
router.get("/getProductsFromDatabase", productsControllers.getProductsFromDatabase)
router.get("/getProductById/:id", productsControllers.getProductById)
router.put("/modifyProductById/:id", productsControllers.modifyProductById)
router.delete("/deleteProductById/:id", productsControllers.deleteProductById)

router.use((error, req, res, next) => {
    console.error(error)
    if(error.name === "CastError") {
        res.status(400).send({error: "id used is malformed"})
    }else{
        res.status(500).end()
    }
})

module.exports = router;
