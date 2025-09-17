import React from "react";
import CategoryCard from "./CategoryCard";
import { categoryImage } from "./data";
import styles from "./Category.module.css";

export default function Category() {
  return (
    <div className={styles.categorySection}>
      {categoryImage.map((item, index) => (
        <CategoryCard
          key={index}
          item={item}
          featured={index < 4} 
        />
      ))}
    </div>
  );
}
