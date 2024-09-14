const productModel = require("../models/productModel")
const fs = require("fs")

module.exports.addProduct = async (req, res) => {
    let image_filename = req.file ? req.file.filename : ""
    const product = new productModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await product.save()
        res.status(201).json({success: true, message: "Product Added"}) // 201 Created
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: "Error adding product"}) // 500 Internal Server Error
    }
}

module.exports.listProduct = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.status(200).json({success: true, data: products})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: "Error fetching products"}) // 500 Internal Server Error
    }
}

module.exports.removeProduct = async (req, res) => {
    try {
        const productId = req.body._id
        if (productId) {
            const product = await productModel.findById(productId)
            if (product) {
                if (product.image) {
                    fs.unlink(`uploads/${product.image}`, (err) => {
                        if (err) console.log(err)
                    })
                }
                await productModel.findByIdAndDelete(productId)
                res.status(200).json({success: true, message: "Product Removed!"})
            } else {
                res.status(404).json({success: false, message: "Product not found"}) // 404 Not Found
            }
        } else {
            res.status(400).json({success: false, message: "Product ID missing"}) // 400 Bad Request
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: "Product Remove Fail!"}) // 500 Internal Server Error
    }
}
