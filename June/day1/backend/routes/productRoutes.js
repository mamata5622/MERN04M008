const express=require("express")
const { createProduct, getProductById } = require("../controllers/productController")

const productRoutes=express.Router()

productRoutes.post("/create",createProduct)
productRoutes.get("/byid/:productId",getProductById)
productRoutes.get("/all-product",getAllProduct);
productRoutes.put("/update/:id",updateProduct)
productRoutes.delete("/delete/:id",deleteProduct)

module.exports=productRoutes