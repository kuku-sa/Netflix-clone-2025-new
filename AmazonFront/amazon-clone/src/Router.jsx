import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Components
import Header from "./components/Header/Header.jsx";

// Pages
import Landing from "./Pages/Landing/Landing.jsx";
import SignIn from "./Pages/Auth/SignUp.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Orders from "./Pages/Orders/Orders.jsx";
import Payment from "./Pages/Payment/Payment.jsx";


// Layout wrapper to keep Header visible on all pages
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

// Define all routes
const router = createBrowserRouter([
  {
    element: <Layout />, // Wrap all children with Layout
    children: [
      { path: "/", element: <Landing /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/cart", element: <Cart /> },
      { path: "/orders", element: <Orders /> },
      { path: "/payment", element: <Payment /> },
      
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
