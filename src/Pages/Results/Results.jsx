import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";
import styles from "./Results.module.css";

function Result() {
  const { search } = useLocation();
  const searchQuery = new URLSearchParams(search).get("query") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const url = searchQuery
      ? `https://fakestoreapi.com/products/search?query=${searchQuery}`
      : "https://fakestoreapi.com/products";

    axios
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load products. Please try again.");
      })
      .finally(() => setLoading(false));
  }, [searchQuery]);

  return (
    <div className={styles.resultPage}>
      <h1>Search Results {searchQuery && `for "${searchQuery}"`}</h1>

      {loading && <Loader />}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !error && products.length === 0 && <p>No products found.</p>}

      {!loading && !error && products.length > 0 && (
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
