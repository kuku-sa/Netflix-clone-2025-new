import React, { useContext, useState } from "react";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { CartContext } from "../../context/CartContext";

function Header() {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/result?query=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  };

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

      <form className={styles.search} onSubmit={handleSearch}>
        <select>
          <option value="all">All</option>
        </select>
        <input
          type="text"
          placeholder="Search Amazon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>

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
