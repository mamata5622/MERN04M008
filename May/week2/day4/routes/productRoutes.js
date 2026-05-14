const express = require("express")
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../controller/productController")
const validation = require("../middleware/ValidationMiddleWare")
const router = express.Router()

router.get("/",validation, getProducts)

router.get("/:id",validation, getProductById)

router.post("/",validation, createProduct)

router.put("/:id",validation, updateProduct)

router.delete("/:id",validation, deleteProduct)


module.exports = router