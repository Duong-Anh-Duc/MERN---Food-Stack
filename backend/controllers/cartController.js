const userModel = require("../models/userModel")
module.exports.addToCart = async (req, res) => {
    try{
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData
        console.log(req.body.itemId)
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }
        else{
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData})
       res.json({success: true, message:"Added to Cart"})
    }catch(error){
        console.log(error)
        res.json({success:false, message : "Error"})
    }

}
module.exports.removeFromCart = async (req, res) => {

}
module.exports.getCart = async (req, res) => {

}