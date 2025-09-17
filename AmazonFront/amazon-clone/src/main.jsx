import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router.jsx";

import { CartProvider } from "./context/CartContext.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
     
        <AppRouter />
   
    </CartProvider>
  </React.StrictMode>
);
