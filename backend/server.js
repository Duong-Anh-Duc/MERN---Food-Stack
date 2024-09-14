require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { connectDB } = require("./config/db")
const productRouter = require("./routes/productRoute")
const userRouter = require("./routes/userRoute")
const cartRouter = require("./routes/cartRoute")
const app = express()
const port = 4000
app.use(express.json())
app.use(cors())
connectDB()
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use("/api/cart", cartRouter)
app.use("/images", express.static('uploads'))
app.get('/', (req, res) => {
    res.send("API is Working")
})
app.listen(port, () => {
    console.log(`Server listen on ${port}`)
})