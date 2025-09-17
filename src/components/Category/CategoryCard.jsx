import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Category.module.css";

export default function CategoryCard({ item, featured }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      className={`${styles.categoryCard} ${featured ? styles.featured : ""}`}
    >
      <div className={styles.imageWrapper}>
        <img src={item.imageLink} alt={item.title} />
      </div>
      <h2>{item.title}</h2>
      <p onClick={() => addToCart(item)}>Shop now</p>
    </div>
  );
}
