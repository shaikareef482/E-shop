import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetailsCard = ({ setOpen, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  const handleMessageSubmit = () => {};
  const removeFromWishlistHandler=()=>{};
  const addToWishlistHandler =()=>{};

  return (
    <div className="bg-[#fff]">
      <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center ">
        <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
          <RxCross1
            size={30}
            className="absolute right-3 top-3 z-50"
            onClick={() => setOpen(false)}
          />
          <div className=" block w-full 800px:flex ">
            <div className="w-full 800px:w-[50%]">
              <img src={data.image_Url[0].url} alt="" />
              <div className="flex">
                <Link to={`/shop/preview/${data.id}`} className="flex">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                  <div>
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className="pb-3 text-[15px]">(4.5) Ratings</h5>
                  </div>
                </Link>
              </div>
              <div
                className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11`}
              >
                <span
                  className="text-[#fff] flex items-center "
                  onClick={handleMessageSubmit}
                >
                  Send Message <AiOutlineMessage className="ml-1" />
                </span>
              </div>
              <h5 className="text-[16px] text-[red] mt-5">(50) sold out</h5>
            </div>

            <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]">
              <h1 className={`${styles.productTitle} text-[20px]`}>
                {data.name}
              </h1>
              <p>{data.description}</p>

              <div className="flex pt-3">
                <h4 className={`${styles.productDiscountPrice}`}>
                  {data.discount_price}$
                </h4>
                <h3 className={`${styles.price}`}>
                  {data.price ? data.price + "$" : null}
                </h3>
              </div>
              <div>
                <div>
                  <button className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold  rounded-1 px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out">
                    -
                  </button>
                  <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                    {count}
                  </span>
                  <button className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold  rounded-1 px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out">
                    +
                  </button>
                </div>
                <div>
                  {click ? (
                    <AiFillHeart
                      size={30}
                      className="cursor-pointer"
                      color={click ? "red" : "#333"}
                      onClick={()=> removeFromWishlistHandler(data)}
                      title="Remove from wishlist"
                    />
                  ) : (
                    <AiOutlineHeart
                      size={30}
                      className="cursor-pointer"
                      onChange={()=>addToWishlistHandler(data)}
                      title="Add to wishlist"
                    />
                  )}
                </div>
              </div>
              <div className={`${styles.button} mt-6 rounded-[4px] h-11 flex items-center`}>
                <span className="text-[#fff] flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;