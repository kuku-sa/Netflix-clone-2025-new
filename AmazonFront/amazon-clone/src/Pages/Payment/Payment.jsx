import React from "react";
import styles from "./Payment.module.css";

function Payment() {
  return (
    <div className={styles.paymentPage}>
      <h1>Payment Page</h1>
      <p>This is a placeholder for the payment process.</p>
      <form className={styles.paymentForm}>
        <label>
          Card Number
          <input type="text" placeholder="1234 5678 9012 3456" />
        </label>
        <label>
          Expiry Date
          <input type="text" placeholder="MM/YY" />
        </label>
        <label>
          CVV
          <input type="text" placeholder="123" />
        </label>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;

