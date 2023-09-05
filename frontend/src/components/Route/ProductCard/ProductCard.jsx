import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import Ratings from "../../Products/Ratings.jsx";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard.jsx";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductCard = ({ data, isEvent }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
  };
  const addToWishlistHandler = (data) => {
    setClick(!click);
  };

  const addToCartHandler = (id) => {};

  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to="/">
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
          <div>
            <Ratings rating={data.ratings} />
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                {data.price === 0 ? data.price : data.discount_price}$
              </h5>
              <h4 className={`${styles.price}`}>
                {data.price ? data.price + "$" : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data.total_sell} sold
            </span>
          </div>
        </Link>
        <div>
          {click ? (
            <AiFillHeart
              title="Remove from wishlist"
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => removeFromWishlistHandler(data)}
              size={22}
              color={click ? "red" : "#333"}
            />
          ) : (
            <AiOutlineHeart
              size={22}
              title="Add to wishlist"
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => addToWishlistHandler(data)}
              color={click ? "red" : "#333"}
            />
          )}
          <AiOutlineEye
            size={22}
            onClick={() => setOpen(!open)}
            className="cursor-pointer absolute right-2 top-14"
            title="Quick view"
            color="#333"
          />
          <AiOutlineShoppingCart
            size={22}
            title="Add to cart"
            onClick={() => addToCartHandler(data.id)}
            color="#444"
            className="cursor-pointer absolute right-2 top-24"
          />
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ProductCard;