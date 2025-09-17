import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Category from "./components/Category/Category.jsx";
// Pages
import Landing from "./Pages/Landing/Landing.jsx";
import SignIn from "./Pages/Auth/SignUp.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Orders from "./Pages/Orders/Orders.jsx";
import Payment from "./Pages/Payment/Payment.jsx";

// Layout wrapper with Header
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Route>
    </Routes>
  );
}
