const express = require("express")
const productController = require("../controllers/productController")
const multer = require("multer")
const productRouter = express.Router()
const strorage = multer.diskStorage({
    destination : "uploads",
    filename : (req, file, cb) => {
        return cb(null, `${Date.now()} ${file.originalname}`)
    }
})
const upload = multer({storage : strorage})
productRouter.post("/add", upload.single("image"),productController.addProduct)
module.exports = productRouter