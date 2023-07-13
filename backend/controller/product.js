const express = require("express");
const { upload } = require("../multer");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Shop = require("../model/shop");
const ErrorHandler = require("../utils/ErrorHandler");
const Product = require("../model/product");
const router = express.Router();

router.post(
  "/create-product",
  upload.array("images"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;

      const shop = await Shop.findById(shopId);
      if (!shop) {
        return next(new ErrorHandler("Shop Id is Invalid", 400));
      } else {
        const files = req.files;
        const imagesUrls = files.map((file) => `${file.filename}`);

        const productData = req.body;
        productData.images = imagesUrls;
        productData.shop = shop;

        const product = await Product.create(productData);

        res.status(201).json({
          success: true,
          product,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

router.get(
  "/get-all-products-shop/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await Product.find({ shopId: req.params.id });

      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

router.delete(
  "/delete-shop-product/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const productId = req.params.id;

      const productData = await Product.findById(productId);

      productData.images.forEach((imageUrl) => {
        const filename = imageUrl;
        const filePath = `uploads/${filename}`;

        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
          }
        });
      });

      const Product = await Product.findByIdAndDelete(productId);

      if (!product) {
        return next(new ErrorHandler("Product not found with this id!", 500));
      }

      res.status(201).json({
        success: true,
        message: "Products Deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

router.get(
  "/get-all-products",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });

      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

module.exports = router;
