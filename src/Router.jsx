// src/Router.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut.jsx";

// Pages
import Landing from "./Pages/Landing/Landing.jsx";
import SignIn from "./Pages/Auth/SignUp.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Orders from "./Pages/Orders/Orders.jsx";
import Payment from "./Pages/Payment/Payment.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";
import Results from "./Pages/Results/Results.jsx";
import CategoryPage from "./components/Category/CategoryPage.jsx";

const router = createBrowserRouter([
  {
    element: <LayOut />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/auth", element: <SignIn /> },
      { path: "/cart", element: <Cart /> },
      { path: "/orders", element: <Orders /> },
      { path: "/payment", element: <Payment /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/results", element: <Results /> },
      { path: "/category/:name", element: <CategoryPage /> },
      
      { path: "/:name", element: <CategoryPage /> },

      // 👇 Catch-all 404 page
      { path: "*", element: <h1>404 - Page Not Found</h1> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
