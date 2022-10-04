const router = require("express").Router();
const { Routes } = require("./routes");

router.use("/products", Routes.Products);
router.use("/categories", Routes.Categories)
router.use("/test", Routes.Test)

module.exports = router;
