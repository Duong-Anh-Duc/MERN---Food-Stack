const mongoose = require('mongoose')
module.exports.connectDB = async() => {
   try {
    await mongoose.connect("mongodb+srv://ducytcg:duc123@cluster0.o9chdqo.mongodb.net/FoodStack")
    console.log("Database connected!")
   } catch (error) {
    console.log("Database connected fail!")
   }
}