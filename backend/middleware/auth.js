const shop = require("../model/shop");
const user = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require('jsonwebtoken');


exports.isAuthenticate = catchAsyncErrors(async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please login to continue",400))
    }

    const decoded = jwt.verify(token,process.env.JWK_SECRET_KEY);

    req.user = await user.findById(decoded.id);

    next();

})

exports.isSeller = catchAsyncErrors(async(req,res,next)=>{
    const {seller_token}= req.cookies;
    if(!seller_token){
        return next(new ErrorHandler("Please login to continue",401));
    }
    const decoded = jwt.verify(seller_token,process.env.JWK_SECRET_KEY);
    
    req.seller = await shop.findById(decoded.id);
    next();
})

