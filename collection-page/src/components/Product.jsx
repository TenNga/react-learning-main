import React from "react";
import styles from "../styles/product.module.css";

const Product = ({ product }) => {
  return (
    <article id={product.id} className={styles.product}>
      <img src={product.image} alt={product.title} width="384" height="384" />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
    </article>
  );
};

export default Product;
