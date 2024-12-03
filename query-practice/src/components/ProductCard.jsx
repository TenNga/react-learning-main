import React, { useState, useRef } from "react";
// import {
//   CardContainer,
//   CardImage,
//   AddToCardBtn,
//   CardControllers,
// } from "../styles/productCard";

export const Productcard = ({ product }) => {
  const [qty, setQty] = useState(0);

  return (""
    // <CardContainer>
    //   <CardImage src={product.img_src} alt={product.title} />
    //   <h1>{product.title}</h1>
    //   <p>${(product.price / 100).toFixed(2)}</p>

    //   {qty <= 0 ? (
    //     <AddToCardBtn onClick={() => setQty((qty) => qty + 1)}>
    //       Add to cart
    //     </AddToCardBtn>
    //   ) : (
    //     <CardControllers>
    //       <button onClick={() => setQty((qty) => qty - 1)}>-</button>
    //       <input type="number" min={0} max={10} disabled value={qty} />
    //       <button onClick={() => setQty((qty) => qty + 1)}>+</button>
    //     </CardControllers>
    //   )}
    // </CardContainer>
  );
};
