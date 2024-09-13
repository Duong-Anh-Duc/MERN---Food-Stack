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
module.exports.listProduct = async(req, res) => {
    try{
        const products = await productModel.find({})
        res.status(200).json({success : true, data : products})
    }catch(error){
        res.status(404).json({success : false, massage : "Error"})
    }
}
module.exports.removeProduct = async(req, res) => {
    try{
        console.log(req.body)
        const products = await productModel.find({_id :req.body._id})
        console.log(products)
        fs.unlink(`uploads/${products.image}`,() => {})
        await productModel.findByIdAndDelete(req.body._id)
        res.status(200).json({success : true, message : "Product Removed!"})
    }catch(error){
        console.log(error)
        res.status(404).json({success : false, message : "Product Remove Fail!"})
    }
}