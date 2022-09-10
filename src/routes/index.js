const router = require("express").Router()
const { Routes } = require("./routes")

router.use("/products", Routes.Products)

module.exports = router