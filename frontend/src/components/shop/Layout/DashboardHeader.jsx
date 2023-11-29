import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { useSelector } from "react-redux";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { backend_url } from "../../../server";
import { BiMessageSquareDetail } from "react-icons/bi";
const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
    // const seller = {
    //   name:"bigbazar",
    //   _id:"647de6d80245b9b4f4f2dc14",
    //   avatar:"w-1685972610924-168452556.png"
    // }
  return (
    <div className="w-full h-[80Px] bg-white shadow sticky top-0 left-0 flex items-center justify-between px-4">
      <div>
        <Link to="/dashboard">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboard/cupouns" className="800px:block hidden">
            <AiOutlineGift
              size={30}
              color="#555"
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-events" className="800px:block hidden">
            <MdOutlineLocalOffer
              size={30}
              color="#555"
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-products" className="800px:block hidden">
            <FiShoppingBag
              size={30}
              color="#555"
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-orders" className="800px:block hidden">
            <FiPackage size={30} color="#555" className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/dashboard-messages" className="800px:block hidden">
            <BiMessageSquareDetail
              size={30}
              color="#555"
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${backend_url}${seller.avatar}`}
              className="w-[50px] h-[50px] rounded-full object-cover"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
