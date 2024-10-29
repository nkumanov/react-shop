import React from "react";
import ProductCard from "../product-card/Product-card";
import styles from './Search.module.scss';
function Search() {
  let items = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section className={styles.searchWrapper}>
      {items.map((element) => (
        <ProductCard key={element}></ProductCard>
      ))}
    </section>
  );
}

export default Search;
