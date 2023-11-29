import React, { useState } from "react";
import style from "../../styles/styles";
import { backend_url } from "../../server";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);


  const incrementCount =()=>{
    setCount(count + 1);
  }

  const decrementCount = ()=>{
    if(count > 1)
    {
      setCount(count - 1)
    }
  }
  const removefromWishlistHandler = (data) => {
    setClick(!click);
  };
  const addToWishlistHandler = () => {
    setClick(!click);
  };
  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className={`${style.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img
                  src={`${data.image_Url[0].url}`}
                  className="w-[80%] "
                  alt=""
                />
                <div className="w-full flex">
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data.image_Url[0].url}
                      className="h-[200px]"
                      alt=""
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data.image_Url[1].url}
                      className="h-[200px]"
                      alt=""
                      onClick={() => setSelect(1)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}$
                  </h4>
                  <h4 className={`${styles.price}`}>{data.price}$</h4>
                </div>
                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-300 to-teal-500 text-white font-bold rounded-1 px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span>{count}</span>
                    <button
                      className="bg-gradient-to-r from-teal-300 to-teal-500 text-white font-bold rounded-1 px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        className="cursor-pointer"
                        color={click ? "red" : "#333"}
                        size={30}
                        onClick={() => removefromWishlistHandler(data)}
                        title="Remove from the whisjlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        className="cursor-pointer"
                        color={click ? "red" : "#333"}
                        onClick={() => addToWishlistHandler(data)}
                        size={30}
                        title="Add to the whisjlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
                >
                  <span className="text-white flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-2" />
                  </span>
                </div>
                <div className="flex items-center pt-8">
                  <Link to={`shop/review/${data.shop._id}`}>
                    <img
                      src={`${data.shop.shop_avatar.url}`}
                      className="w-[50px] h-[50px] rounded-full mr-2"
                      alt=""
                    />
                  </Link>
                  <div className="pr-8">
                    <Link to={`shop/review/${data.shop._id}`}>
                      <h3 className={`${styles.shop_name} pb-1 pt-1 `}>
                        {data.shop.name}
                      </h3>
                    </Link>
                    <h5 className="pb-3 text-[15px]">{data.shop.ratings}</h5>
                  </div>
                  <div
                    className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                  >
                    <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfro data={data} />
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfro = ({ data }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2 ">
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px] "
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px] "
            onClick={() => setActive(2)}
          >
            Product Review
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px] "
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            {data.description}
          </p>
        </>
      ) : null}
      {active === 2 ? (
        <div className="w-full justify-center min-h-[40vh] flex items-center">
          <p>No Review yet</p>
        </div>
      ) : null}
      {active === 3 && (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <Link>
              <div>
                <img
                  src={data.shop.shop_avatar.url}
                  className="w-[50px] h-[50px] rounded-full "
                  alt=""
                />
                <div className="pl-3">
                  <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                  <h5 className="pb-2 text-[15px]">
                    {data.shop.ratings} Ratings
                  </h5>
                </div>
              </div>
            </Link>
            <p className="pt-2">It is very good shop to buy the products</p>
          </div>
          <div className="w-full  800px:w-[50%] mt-5 800px:flex  flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined on: <span className="font-[500]">14 March, 2023</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products: <span className="font-[500]">{16}</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Review: <span> {15}</span>
              </h5>
              <Link to="/">
                <div
                  className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                >
                  <h4 className="text-white">Visit shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
