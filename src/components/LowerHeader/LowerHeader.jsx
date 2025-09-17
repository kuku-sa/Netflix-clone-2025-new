import React from "react";
import { FaBars } from "react-icons/fa";
import styles from "./LowerHeader.module.css";

function LowerHeader() {
  return (
    <nav className={styles.lowerHeader}>
      <ul className={styles.menu}>
        <li className={styles.allMenu}>
          <FaBars /> 
          <span>All</span>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
    
      </ul>
    </nav>
  );
}

export default LowerHeader;
