const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const shopSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your shop Name"],
    },
    email:{
        type:String,
        required:[true,"Please enter your shop email address"],
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength:[6,"Password should be greater then 6 character"],
        select:false,
    },
    description:{
        type:String,
    },
    address:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required: true,
    },
    role:{
        type:String,
        default:"Seller",
    },
    avatar:{
        type:String,
        required:true,
    },
    zipCode:{
        type:Number,
        required: true,
    },
    createdAt:{
        type:Date,
        default: Date.now(),
    },
    resetPasswordToken: String,
    resetPasswordTime: Date,

});

module.exports = mongoose.model("Shop",shopSchema);