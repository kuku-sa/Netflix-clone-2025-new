import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { OrdersContext } from "../../context/OrdersContext";
import styles from "./Cart.module.css";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";

function Cart() {
  const { cartItems, clearCart, getCartTotal, getCartCount } =
    useContext(CartContext);
  const { addOrder } = useContext(OrdersContext);

  const handleCheckout = () => {
    addOrder(cartItems);   // Save order
    clearCart();           // Empty cart
    alert("Order placed successfully!");
  };

  return (
    <div className={styles.cartPage}>
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.title} />
                <div className={styles.cartInfo}>
                  <h3>{item.title}</h3>
                  <p>
                    Price: <CurrencyFormat value={item.price} />
                  </p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h3>Cart Summary</h3>
            <p>Total Items: {getCartCount()}</p>
            <p>
              Total Price: <CurrencyFormat value={getCartTotal()} />
            </p>
            <button
              className={styles.checkoutBtn}
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
