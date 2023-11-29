import React, { useEffect, useState } from "react";
import Store from "./redux/store";
import { loadUser, loadSeller } from "./redux/actions/user";
import "./App.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./routes/ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";
import { Elements } from "@stripe/react-stripe-js";
import { getAllProducts } from "./redux/actions/product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  ShopCreatePage,
  ShopLoginPage,
  ProfilePage,
  ProductsPage,
  ProductDetailsPage,
  EventsPage,
  FAQPage,
  BestSellingPage,
  SignupPage,
  ActivationPage,
  HomePage,
  SellerActivationPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
} from "./routes/Router.js";
import {
  ShopDashboardPage,
  ShopHomePage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllOrders,
  ShopAllEvents,
  ShopAllCoupouns,
  ShopAllRefunds,
  ShopSettingsPage,
  ShopOrderDetails,
  ShopWithDrawMoneyPage,
} from "./routes/ShopRouter";
import SellerProtectedRouter from "./routes/SellerProtectedRouter";
import { getAllEvents } from "./redux/actions/event";
import axios from "axios";
import { server } from "./server";
import { loadStripe } from "@stripe/stripe-js";

const App = () => {
  const [stripeApikey, setStripeApiKey] = useState("");

  async function getStripeApikey() {
    const { data } = await axios.get(`${server}/payment/stripeapikey`);
    setStripeApiKey(data.stripeApikey);
  }

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
    getStripeApikey();
  }, []);
  return (
    <BrowserRouter>
      {stripeApikey && (
        <Elements stripe={loadStripe(stripeApikey)}>
          <Routes>
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Elements>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route
          path="/seller/activation/:activation_token"
          element={<SellerActivationPage />}
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:name" element={<ProductDetailsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/shop-create" element={<ShopCreatePage />} />
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route
          path="/dashboard"
          element={
            <SellerProtectedRouter>
              <ShopDashboardPage />
            </SellerProtectedRouter>
          }
        />
        <Route path="/order/success" element={<OrderSuccessPage />} />
        <Route
          path="/dashboard-create-product"
          element={
            <SellerProtectedRouter>
              <ShopCreateProduct />
            </SellerProtectedRouter>
          }
        />
        <Route
          path="/settings"
          element={
            <SellerProtectedRouter>
              {" "}
              <ShopSettingsPage />
            </SellerProtectedRouter>
          }
        />
        <Route
          path="/dashboard-orders"
          element={
            <SellerProtectedRouter>
              <ShopAllOrders />
            </SellerProtectedRouter>
          }
        />
        <Route
          path="/dashboard-refunds"
          element={
            <SellerProtectedRouter>
              <ShopAllRefunds />
            </SellerProtectedRouter>
          }
        />
        <Route
          path="/order/:id"
          element={
            <SellerProtectedRouter>
              <ShopOrderDetails />
            </SellerProtectedRouter>
          }
        />
        <Route
          path="/shop/:id"
          element={
            <SellerProtectedRouter>
              <ShopHomePage />
            </SellerProtectedRouter>
          }
        />
        <Route
          path="/dashboard-withdraw-money"
          element={
            <SellerProtectedRouter>
              <ShopWithDrawMoneyPage />
            </SellerProtectedRouter>
          }
        />
        <Route
          path="/dashboard-products"
          element={
            <SellerProtectedRouter>
              <ShopAllProducts />
            </SellerProtectedRouter>
          }
        />
        <Route
          path="/dashboard-coupouns"
          element={
            <SellerProtectedRouter>
              <ShopAllCoupouns />
            </SellerProtectedRouter>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard-events"
          element={
            <SellerProtectedRouter>
              <ShopAllEvents />
            </SellerProtectedRouter>
          }
        />
        <Route
          path="/dashboard-create-event"
          element={
            <SellerProtectedRouter>
              <ShopCreateEvents />
            </SellerProtectedRouter>
          }
        />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
