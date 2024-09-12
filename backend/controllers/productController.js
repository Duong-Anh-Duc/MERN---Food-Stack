const productModel = require("../models/productModel")
const fs = require("fs")
module.exports.addProduct = async (req, res) => {
    let image_filename = `${req.file.filename}`
    const product = new productModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        category : req.body.category,
        image : image_filename
    })
    try {
       await product.save() 
       res.status(200).json({success:true, message:"Product Added"})
    } catch (error) {
        console.log(error)
        res.status(404).json({success : false, message : "Error"})
    }
}