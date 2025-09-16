import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (!cartItems.length) return <p>Your cart is empty.</p>;

  return (
    <div>
      <h1>My Cart</h1>
      <button onClick={clearCart}>Clear Cart</button>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title}(x{item.quantity}){" "}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
