const express = require("express")
const Middleware = require("../middlewares/auth")
const placeOrderController = require("../controllers/orderControllers")
const orderRouter = express.Router()
orderRouter.post("/place", Middleware.authMiddleware, placeOrderController.placeOrder)

module.exports = orderRouter