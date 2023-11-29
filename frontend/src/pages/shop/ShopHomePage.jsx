import React from 'react';
import ShopInfo from "../../components/shop/ShopInfo.jsx";
import ShopProfileData from "../../components/shop/ShopProfileData.jsx"
import styles from '../../styles/styles.js';
const ShopHomePage = () => {
  return (
    <div className={`${styles.section} bg-[#f5f5f5]`}>
        <div className='w-full flex py-10 justify-between'>
            <div className='w-[25%] bg-[#fff] h-[90vh] rounded-[4px] shadow-sm overflow-y-scroll sticky top-0 left-0 z-10'>
              <ShopInfo isOwner={true}/>
            </div>
            <div className='w-[72%] rounded-[4px]'>
            <ShopProfileData isOwner={true}/>
            </div>
        </div>
    </div>
  );
}

export default ShopHomePage;
