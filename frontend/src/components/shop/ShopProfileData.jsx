import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "../../styles/styles.js";
import { productData } from "../../static/data.js";
import ProductCard from "../Route/ProductCard/ProductCard.jsx";
import { getAllProductsShop } from "../../redux/actions/product.js";
import { getAllEventsShop } from "../../redux/actions/event.js";
import { backend_url } from "../../server.js";
import Ratings from "../Products/Ratings.jsx"
const ShopProfileData = ({ isOwner }) => {
  const { seller } = useSelector((state) => state.seller);
  const { events } = useSelector((state) => state.events);
  const { allProducts } = useSelector((state) => state.product);
  const [active, setActive] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    dispatch(getAllEventsShop(id));
  }, [dispatch]); //eslint-disable-line

  const allReviews =
    allProducts && allProducts.map((product) => product.review).flat();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full">
          <div className="flex items-center" onClick={() => setActive(1)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 1 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Shop Products
            </h5>
          </div>
          <div className="flex items-center" onClick={() => setActive(2)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 2 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Running Events
            </h5>
          </div>
          <div className="flex items-center" onClick={() => setActive(3)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 3 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              {" "}
              Shop Reviews
            </h5>
          </div>
        </div>
        <div>
          {isOwner && (
            <div>
              <Link to="/dashboard">
                <div className={`${styles.button} !rounded-[4px] h-[42px]`}>
                  <span className="text-[#fff]"> Go Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      <br />
      {active === 1 && (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cals-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0]">
          {allProducts &&
            allProducts.map((i, index) => (
              <ProductCard data={i} key={index} isShop={true} />
            ))}
        </div>
      )}

      {active === 2 && (
        <div className="w-full">
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cals-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
            {events &&
              events.map((i, index) => (
                <ProductCard data={i} key={index} isShop={true} />
              ))}
          </div>
        </div>
      )}

      {active === 3 && (
        <div className="w-full">
          {allReviews &&
            allReviews.map((item, index) => (
              <div>
                <img src={`${backend_url}/${item.user.avater}`} alt="" />{" "}
                <div className="pl-2">
                  <div className="flex w-full items-center">
                    <h1 className="font-[600] pr-2">{item.user.name}</h1>
                    <Ratings rating={item.rating}/>
                  </div>
                  <p className="font-[400] text-[#000000a7]">{item?.commet}</p>
                   <p className="text-[#000000a7]">{"2days ago"}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ShopProfileData;
