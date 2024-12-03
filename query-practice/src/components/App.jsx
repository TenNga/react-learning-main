import React from "react";
import PostContainer from "./PostContainer";

function App() {
    const product = {
      title: "Shampoo",
      img_src:
        "https://www.publicgoods.com/cdn/shop/products/shampoo_lifestyle_01_360x.jpg?v=1700105468",
      price: 3000,
    };
  
    return (
      <>
        <header>
          <h1>Product list</h1>
        </header>
        <main>
          <PostContainer />
        </main>
      </>
    );
  }

export default App