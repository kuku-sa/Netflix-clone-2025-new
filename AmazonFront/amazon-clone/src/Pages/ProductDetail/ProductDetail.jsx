import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { CartContext } from "../../context/CartContext";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const isInCart = cartItems.some((item) => item.id === parseInt(id));

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className={styles.detailContainer}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.title} />
      </div>

      <div className={styles.infoWrapper}>
        <h2>{product.title}</h2>

        <ReactStars
          count={5}
          value={product.rating?.rate || 0}
          size={20}
          isHalf={true}
          edit={false}
          activeColor="#f0c14b"
        />
        <p className={styles.ratingText}>
          {product.rating?.rate} / 5 ({product.rating?.count} reviews)
        </p>

        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>

        <button
          className={`${styles.addToCartBtn} ${isInCart ? styles.removeBtn : ""}`}
          onClick={() => (isInCart ? removeFromCart(product.id) : addToCart(product))}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
