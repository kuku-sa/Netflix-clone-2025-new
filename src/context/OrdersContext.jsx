import React, { createContext, useState } from "react";

// Create context
export const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  // ✅ Place a new order
  const placeOrder = (cartItems) => {
    setOrders((prevOrders) => [...prevOrders, ...cartItems]);
  };

  return (
    <OrdersContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}
