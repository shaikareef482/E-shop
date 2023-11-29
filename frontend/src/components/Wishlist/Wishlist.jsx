import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "../../styles/styles";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max 256 gb ssd and  8gb sliver colour",
      description: "test",
      price: 900,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and  8gb sliver colour",
      description: "test",
      price: 568,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and  8gb sliver colour",
      description: "test",
      price: 485,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishlist(false)}
            />
          </div>
          {/*item length*/}
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500] ">3 items</h5>
          </div>
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer" />
        <img
          src="https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_960_720.jpg"
          alt=""
          className="w-[120px] h-min ml-2 mr-2 rounded-[5px]"
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            ${data.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            {" "}
            US${totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus className="cursor-pointer" title="Add to the Cart" />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
