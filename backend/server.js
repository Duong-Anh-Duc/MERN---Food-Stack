const express = require("express")
const cors = require("cors")
const { connectDB } = require("./config/db")
const productRouter = require("./routes/productRoute")
const app = express()
const port = 4000
app.use(express.json())
app.use(cors())
connectDB()
app.use("/api/product", productRouter)
app.get('/', (req, res) => {
    res.send("API is Working")
})
app.listen(port, () => {
    console.log(`Server listen on ${port}`)
})