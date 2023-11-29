const mongoose = require("mongoose");
const fs =  require("fs");
const dotenv = require("dotenv");
const Product = require("../model/product");
const {productData} = require("./data");
const Shop = require("../model/shop");

dotenv.config({ path: "../config/.env" });

const DB = process.env.DL_URL;

mongoose.connect(DB, { useNewUrlParser: true }).then(()=>{
    console.log("DB is connected successfully!");
});


const importData = async()=>{
    try {

        const product = []
        const shopId = '647de6d80245b9b4f4f2dc14';
        const shop= await Shop.findById(shopId)
        console.log(shop);
        productData && productData.forEach((i)=>{
              const  productvalue={
                  name:i.name,
                  description:i.description,
                  category:i.category,
                  tags:"Applications",
                  originalPrice:i.originalPrice,
                  discountPrice:i.discount_price,
                  stock:i.stock,
                  shopId,
                  sold_out:i.total_sell,
                  shop:shop
               }
               i.image_Url.forEach((image)=>{
                productvalue.images=image.url;
               })
            

               product.push(productvalue);
            
             })
            
          console.log(product);

        await Product.create(product);

        console.log("Data sucessfully loaded");

        
    } catch (error) {
        
        console.log(error);
    }

    process.exit();
}

const deletedata = async()=>{
    try {
        await Product.deleteMany();
        console.log("it is deleted successfully")
    } catch (error) {
        console.log(error);
        
    }
    process.exit();
}


if(process.argv[2] === '--import')
{
    importData();
}else if(process.argv[2] === '--delete')
{
    deletedata();
}

console.log(process.argv);

