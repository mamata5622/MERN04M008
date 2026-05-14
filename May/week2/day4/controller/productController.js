const Product = require("../models/productModel")
const getProducts = async (req, res) => {
    try {
        const product = await Product.find()

        if (!product) {
            res.status(404).json({ message: "Products are not available" })
        }

        // res.send({users,message:"success"})
        res.status(200).json({ message: "succcess fetched", users })
    } catch (error) {
        res.status(500).json({ message: "products are not available" })
    }
}
const getProductById = async (req, res) => {
    try {
        const product = await Product.find(getProductById)
        if (!product) {
            res.status(404).json({ message: "product is not available" })
        }
        res.status(200).json({ message: "successfully fetched" })
    } catch (error) {
        res.status(500).json({ message: "product is not available" })
    }
}
const createProduct = async (req, res) => {
    try {
        const { name, description, price, isActive } = res.body
        if (!name || !description || !price || !isActive) {
            res.send("Kindly fill the field")
        }
        const existProduct = await Product.findOne({ name })
        if (existProduct) {
            res.send("product already exist")
        } else {
            const product = new Product({ name, dexcription, price, isActive })
            await user.save()
            res.status(200).json({ message: "successfully product created" })
        }
    } catch (error) {
        res.status(500).json({ message: "failed to create" })
    }
}
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = req.body

        const updateProduct = await Product.findByIdAndUpdate(id, product, { new: true })
        if (!existProduct) {
            res.status(404).json({ message: "product is not found." })
        }
        res.status(200).json({ message: "successfully product updated" })
    } catch (error) {
        res.status(500).json({ message: "failed to update" })
    }
}
const deleteProduct = async (req, res) => {
    try {
        const {id}=req.params;
        const deleteProduct=await Product.findByIdAndDelete(id)

        if(!existProduct){
            res.status(404).json({message:"product is not found"})
        }
        res.status(200).json({message:"successfully product deleted"})
    } catch (error) {
        res.status(500).json({ message: "failed to delete" })
    }
}

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct }