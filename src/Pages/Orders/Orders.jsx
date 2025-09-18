import React, { useContext } from "react";
import { OrdersContext } from "../../context/OrdersContext";
import styles from "./Orders.module.css";

function Orders() {
  const { orders } = useContext(OrdersContext);

  return (
    <div className={styles.ordersPage}>
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <ul className={styles.orderList}>
          {orders.map((order) => (
            <li key={order.id} className={styles.orderItem}>
              <h3>Order #{order.id}</h3>
              <p>Date: {order.date}</p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price.toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;

