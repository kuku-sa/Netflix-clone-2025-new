import React, { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import styles from "./Product.module.css";
import { CartContext } from "../../context/CartContext";

function ProductCard({ data }) {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const [starSize, setStarSize] = useState(16);
  const [isInCart, setIsInCart] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check if product is in cart
  useEffect(() => {
    const exists = cartItems?.some((item) => item.id === data.id) || false;
    setIsInCart(exists);
  }, [cartItems, data.id]);

  // Responsive stars
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 480) setStarSize(12);
      else if (window.innerWidth < 768) setStarSize(14);
      else setStarSize(16);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle add/remove
  const handleCartClick = () => {
    setLoading(true);
    setTimeout(() => {
      if (isInCart) removeFromCart(data.id);
      else addToCart(data);
      setLoading(false);
    }, 500);
  };

  return (
    <div className={styles.productCard}>
      <a href="#">
        <img src={data.image} alt={data.title} />
      </a>

      <div className={styles.productInfo}>
        <h3 title={data.title}>{data.title}</h3>

        <div className={styles.productMeta}>
          <ReactStars
            count={5}
            value={data.rating?.rate || 0}
            size={starSize}
            isHalf={true}
            edit={false}
            activeColor="#f0c14b"
            emptyIcon={<i className="far fa-star" />}
            halfIcon={<i className="fa fa-star-half-alt" />}
            filledIcon={<i className="fa fa-star" />}
          />
          <span className={styles.ratingText}>
            {data.rating?.rate?.toFixed(1) || "0.0"} ({data.rating?.count || 0})
          </span>
        </div>

        <p className={styles.price}>
          <CurrencyFormat value={data.price} />
        </p>

        <button
          className={`${styles.addToCartBtn} ${isInCart ? styles.removeBtn : ""}`}
          onClick={handleCartClick}
          disabled={loading}
        >
          {loading
            ? isInCart
              ? "Removing..."
              : "Adding..."
            : isInCart
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
