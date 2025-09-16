import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import styles from "./Product.module.css";
import { CartContext } from "../../context/CartContext";

function ProductCard({ data }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className={styles.productCard}>
      {/* Product Image */}
      <Link to={`/product/${data.id}`}>
        <img src={data.image} alt={data.title} />
      </Link>

      {/* Product Info */}
      <div className={styles.productInfo}>
        <h3>{data.title}</h3>

        {/* Rating */}
        <div className={styles.productMeta}>
          <ReactStars
            count={5}
            value={data.rating?.rate || 0}
            size={16}
            isHalf={true}
            edit={false}
            activeColor="#f0c14b"
          />
          {data.rating ? (
            <span className={styles.ratingText}>
              {data.rating.rate.toFixed(1)} ({data.rating.count})
            </span>
          ) : (
            <span className={styles.ratingText}>No reviews</span>
          )}
        </div>

        {/* Price */}
        <p className={styles.price}>
          <CurrencyFormat value={data.price} />
        </p>

        {/* Add to Cart */}
        <button
          className={styles.addToCartBtn}
          onClick={() => addToCart(data)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
