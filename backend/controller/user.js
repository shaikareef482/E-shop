const express = require("express");
const router = express.Router();
const ErrorHandler= require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const {upload} = require("../multer");
const User = require("../model/user");
const jwk = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");

router.post("/create-user",upload.single("file"),async(req,res,next)=>{
    try{
        const {name,email,password} = req.body;
        const UserEmail =  await User.findOne({email});
         console.log(name+email);
        if(UserEmail){
            const filename = req.file.filename;
            const filePath = `uploads/${filename}`;

            fs.unlink(filePath,(err)=>{
                if(err){
                    console.log(err);
                    res.status(500).json({message:"Error delecting file"});

                }
            });
            return next(new ErrorHandler("User already exits",400))
        }

        const filename = req.file.filename;
        const fileUrl = path.join(filename);

        const user ={
            name: name,
            email:email,
            password:password,
            avatar:fileUrl,
        }

       const activationToken = createActivationToken(user);
    
        res.status(201).json({
            status:"success",
            user:newUser,
            message:"the user signup was success"
        })

    }catch(error){
        return next(new ErrorHandler("User already exists",400));
    }
});


const createActivationToken = (user)=>{
    return jwk.sign(user,process.env.ACTIVATION_SECRET,{
        expiresIn:"5m",
    })
}

module.exports =  router;
