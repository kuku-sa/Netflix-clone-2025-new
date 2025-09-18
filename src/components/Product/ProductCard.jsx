import React, { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import styles from "./Product.module.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ data }) {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const isProductInCart = cartItems.some((item) => item.id === data.id);

  return (
    <div className={styles.productCard}>
      <Link to={`/product/${data.id}`}>
        <img src={data.image} alt={data.title} />
     </Link>

      <div className={styles.productInfo}>
        <h3>{data.title}</h3>

        <div className={styles.productMeta}>
          <ReactStars
            count={5}
            value={data.rating?.rate}
            size={16}
            isHalf={true}
            edit={false}
            activeColor="#f0c14b"
            emptyIcon={<i className="far fa-star" />}
            halfIcon={<i className="fa fa-star-half-alt" />}
            filledIcon={<i className="fa fa-star" />}
          />
          <span className={styles.ratingText}>
            {data.rating?.rate?.toFixed(1)} ({data.rating?.count})
          </span>
        </div>

        <p className={styles.price}>
          <CurrencyFormat value={data.price} />
        </p>

        {isProductInCart ? (
          <button
            className={`${styles.addToCartBtn} ${styles.removeBtn}`}
            onClick={() => removeFromCart(data.id)}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className={styles.addToCartBtn}
            onClick={() => addToCart(data)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
