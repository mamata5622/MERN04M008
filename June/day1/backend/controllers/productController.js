exports.createProduct = async (req, res) => {
    try {

        const { title, description, price } = req.body;

        if (!title || !description || !price) {
           return res.status(500).json({success:false, message: "Kindly fill the field" })
        }

        const product = new Product({
            title,
            description,
            price,
        });
        await product.save()

        return res.status(201).json({success:true,message:"successfully created"})
    } catch (error) {
        return res.status(500).json({success:false, message: "Failed", error: error.message })
    }
}
exports.getProductById = async (req, res) => {
    try {
        const { productId } = req.params;
        if (!productId) {
            res.status(500).json({success:false, message: "product id is not there" });
        }
        const product = await Product.findById(productId)

        if (!product) {
            res.status(404).json({success:false, message: "not found" })
        }
        res.status(200).json({success:true, message: "successfully fetched", product })

    } catch (error) {
        res.status(500).json({success:false, message: "failed to fetch" });
    }
}