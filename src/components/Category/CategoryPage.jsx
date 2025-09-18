
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Category.module.css";

const allProducts = [
   { id: 1, title: "Laptop", category: "electronics", price: 1200, image: "https://via.placeholder.com/150?text=Laptop" },
  { id: 2, title: "Necklace", category: "jewelery", price: 85, image: "https://via.placeholder.com/150?text=Necklace" },
  { id: 3, title: "T-Shirt", category: "men's clothing", price: 25, image: "https://via.placeholder.com/150?text=T-Shirt" },
  { id: 4, title: "Dress", category: "women's clothing", price: 60, image: "https://via.placeholder.com/150?text=Dress" },
  { id: 5, title: "Smartphone", category: "electronics", price: 800, image: "https://via.placeholder.com/150?text=Smartphone" },
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
               <img src={p.image} alt={p.title} />
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