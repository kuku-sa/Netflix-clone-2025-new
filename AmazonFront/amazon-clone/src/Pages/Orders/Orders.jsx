import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Orders.module.css";

function Orders() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={styles.ordersPage}>
      <h1>My Orders</h1>
      {cartItems.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <ul className={styles.orderList}>
          {cartItems.map((item) => (
            <li key={item.id} className={styles.orderItem}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;
