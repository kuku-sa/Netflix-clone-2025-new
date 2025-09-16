import React from "react";
import { categoryImage } from "./CategoryFullInfos"; 
import CategoryCard from "./CategoryCard";
import styles from "./Category.module.css";

export default function Category() {
  return (
    <section className={styles.categorySection}>
      {categoryImage.map((item) => (
        <CategoryCard key={item.name} item={item} />
      ))}
    </section>
  );
}
