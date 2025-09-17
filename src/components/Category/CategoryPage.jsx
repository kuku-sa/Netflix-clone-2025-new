
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Category.module.css";

const allProducts = [
  { id: 1, title: "Laptop", category: "electronics", price: 1200 },
  { id: 2, title: "Necklace", category: "jewelery", price: 85 },
  { id: 3, title: "T-Shirt", category: "men's clothing", price: 25 },
  { id: 4, title: "Dress", category: "women's clothing", price: 60 },
  { id: 5, title: "Smartphone", category: "electronics", price: 800 },
];

export default function CategoryPage() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filtered = allProducts.filter(
      (p) => p.category.toLowerCase() === name.toLowerCase()
    );
    setProducts(filtered);
  }, [name]);

  return (
    <div className={styles.categoryPage}>
      <h1>Category: {name}</h1>
      {products.length > 0 ? (
        <div className={styles.productGrid}>
          {products.map((p) => (
            <div key={p.id} className={styles.productCard}>
              <h3>{p.title}</h3>
              <p>${p.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  );
}