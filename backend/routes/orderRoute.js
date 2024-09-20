const express = require("express")
const Middleware = require("../middlewares/auth")
const placeOrderController = require("../controllers/orderControllers")
const orderRouter = express.Router()
orderRouter.post("/place", Middleware.authMiddleware, placeOrderController.placeOrder)
orderRouter.post("/verify", Middleware.authMiddleware, placeOrderController.verifyOrder)
orderRouter.post("/userorders", Middleware.authMiddleware, placeOrderController.userOrder)
orderRouter.get("/list", placeOrderController.listOrders)
module.exports = orderRouter