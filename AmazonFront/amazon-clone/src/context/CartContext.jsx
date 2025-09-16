import React, { createContext, useState } from "react";

// Create Context
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((p) => p.id === item.id);
      if (exists) {
        // increase quantity if already in cart
        return prevItems.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // ✅ Remove item completely from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((p) => p.id !== id));
  };

  // ✅ Get total items count
  const getCartCount = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  // ✅ Get total price
  const getCartTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getCartCount,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
