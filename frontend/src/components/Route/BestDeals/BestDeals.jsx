import React, { useState, useEffect } from "react";
import styles from "../../../styles/styles";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard.jsx";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const {allProducts} = useSelector((state)=>state.product)

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData.sort(
      (a, b) => b.total_sell - a.total_sell
    );
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, [allProducts]);
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
