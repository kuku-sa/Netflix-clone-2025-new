import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard";
import styles from "./Results.module.css";

function Result() {
  const { search } = useLocation(); // get query string from URL
  const searchQuery = new URLSearchParams(search).get("query") || ""; // extract 'query' param

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // Filter products by search query if provided
        const filteredProducts = searchQuery
          ? res.data.filter((item) =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : res.data;
        setProducts(filteredProducts);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [searchQuery]);

  return (
    <div className={styles.resultPage}>
      <h1>Search Results {searchQuery && `for "${searchQuery}"`}</h1>

      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className={styles.productSection}>
          {products.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Result;
