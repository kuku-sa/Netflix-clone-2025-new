import React, { useContext } from "react";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { CartContext } from "../../context/CartContext";

function Header() {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </Link>
      </div>

      <div className={styles.delivery}>
        <FaMapMarkerAlt />
        <div>
          <p>Deliver to</p>
          <span>Ethiopia</span>
        </div>
      </div>

      <div className={styles.search}>
        <select>
          <option value="all">All</option>
        </select>
        <input type="text" placeholder="Search Amazon" />
        <button>
          <FaSearch />
        </button>
      </div>

      <div className={styles.navLinks}>
        <Link to="/signin">
          <div>
            <p>Sign In</p>
            <span>Account & Lists</span>
          </div>
        </Link>

        <Link to="/orders">
          <div>
            <p>Returns</p>
            <span>& Orders</span>
          </div>
        </Link>

        <Link to="/cart" className={styles.cart}>
          <FaShoppingCart size={24} />
          <span className={styles.cartCount}>{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
