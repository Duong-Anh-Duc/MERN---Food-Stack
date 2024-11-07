require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { connectDB } = require("./config/db")
const productRouter = require("./routes/productRoute")
const userRouter = require("./routes/userRoute")
const cartRouter = require("./routes/cartRoute")
const orderRouter = require("./routes/orderRoute")
const app = express()
const port = process.env.PORT || 4000
app.use(express.json())
app.use(cors(
//     {
//     origin : ["https:deploy-mern-1whq.vercel.app"],
//     methods : ["POST", "GET"],
//     credentials : true
// }
))
connectDB()
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)
app.use("/images", express.static('uploads'))
app.get('/', (req, res) => {
    res.send("API is Working")
})
app.listen(port, () => {
    console.log(`Server listen on ${port}`)
})