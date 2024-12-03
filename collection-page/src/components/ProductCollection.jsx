import React from "react";
import styles from "../styles/collection.module.css";
import Product from "./Product";

const ProductCollection = ({ products }) => {
  const renderProducts = products.map((product) => (
    <Product product={product} key={product.id} />
  ));
  return (
    <div>
      <h1>Product collection</h1>
      <div role="region" className={styles.container}>
        {renderProducts}
      </div>
    </div>
  );
};

export default ProductCollection;
