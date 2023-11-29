import React from 'react';
import OrderDetails from '../../components/shop/OrderDetails.jsx'
import DashboardHeader from '../../components/shop/Layout/DashboardHeader';
import Footer from '../../components/Layout/Footer';

const ShopOrderDetails = () => {
  return (
    <div>
        <DashboardHeader/>
         <OrderDetails/>
        <Footer/>
      
    </div>
  );
}

export default ShopOrderDetails;
