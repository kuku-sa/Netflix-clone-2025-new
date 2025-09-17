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
    <div className={styles.productWrapper}>
        {products.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>

    </div>
  );
}

export default Product;
