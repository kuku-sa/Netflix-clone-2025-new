import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router.jsx";
import { OrdersProvider } from "./context/OrdersContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { StateProvider } from "./StateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <OrdersProvider>
       <StateProvider>
        <AppRouter />
       </StateProvider> 
       </OrdersProvider>
    </CartProvider>
  </React.StrictMode>
);
