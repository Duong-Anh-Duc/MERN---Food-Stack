const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const validator = require("validator")

module.exports.loginUser = async(req, res) => {
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).json({success: false, message: "User doesn't exist"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(401).json({success: false, message: "Invalid credentials"}) // 401 Unauthorized
        }
        const token = this.createToken(user._id)
        return res.status(200).json({success: true, token})
    } catch(error) {
        console.log(error)
        return res.status(500).json({success: false, message: "Server error"}) // 500 Internal Server Error
    }
}

module.exports.createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

module.exports.registerUser = async(req, res) => {
    const {name, email, password} = req.body
    console.log(req.body)
    try {
        const exists = await userModel.findOne({email})
        if(exists){
            return res.status(404).json({success: false, message: "User already exists"}) // 409 Conflict
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({success: false, message: "Please enter a valid email"}) // 400 Bad Request
        }
        if(password.length < 8){
            return res.status(400).json({success: false, message: "Please enter a strong password"}) // 400 Bad Request
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = this.createToken(user._id)
        res.status(201).json({success: true, token}) // 201 Created
    } catch(error) {
        console.log(error)
        res.status(500).json({success: false, message: "Server error"}) // 500 Internal Server Error
    }
}
