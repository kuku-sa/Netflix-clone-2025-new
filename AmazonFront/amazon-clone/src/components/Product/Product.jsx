import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./Product.module.css";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.productSection}>
      {products.map((item, index) => (
        <ProductCard
          key={item.id}
          data={item}
          className={index < 4 ? styles.featured : ""}
        />
      ))}
    </div>
  );
}

export default Product;
