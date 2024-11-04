import React, { useEffect, useState } from 'react';
import { ProductType } from './type/product';
import { useQueryProducts } from './hooks/useQueryProducts';

function App() {
  const [products, setProducts] = useState<ProductType[] | null>(null)
  const {data} = useQueryProducts()

  useEffect(()=>{
    setProducts(data?.products);
  },[])

  const renderProductTitle = products?.map(pd => <li>{pd.title}</li>);

  return (
    <div className="App">
      <h1>App Pager here</h1>
      {!products && <p>Loading...</p>}
      {products && <ol>{renderProductTitle}</ol>}
    </div>
  );
}

export default App;
