const express = require("express");
const ErrorHandler = require("./utils/ErrorHandler");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser")


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended:true,limit:"50mb"
}));

app.use(cors());

app.use("/",express.static("uploads"));

if(process.env.NODE_ENV !== "PRODUCTION")
{
    require("dotenv").config({
        path:"backend/config/.env",
    })
}

app.get("/",(req,res)=>{
    res.send("hello world")

})

const user = require("./controller/user");

app.use("/api/v2/user",user);


app.use(ErrorHandler);
module.exports = app;