const cartController = require("../controllers/cartController")
const express = require("express")
const { authMiddleware } = require("../middlewares/auth")
const cartRouter = express.Router()
cartRouter.post("/add",authMiddleware ,cartController.addToCart)
cartRouter.post("/remove",authMiddleware, cartController.removeFromCart)
cartRouter.post("/get", authMiddleware,cartController.getCart)
module.exports = cartRouter