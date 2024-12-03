import { useEffect, useState } from "react";
import "./styles.css";
import Filter from "./components/Filter";
import ProductCollection from './components/ProductCollection'

export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const resp = await fetch("https://fakestoreapi.com/products");
        if (!resp.ok) {
          throw new Error("Error fetching prodcust");
        }
        const data = await resp.json();
        setProducts(data);
        const allCate = data.map((p) => p.category);
        const uniCate = [...new Set(allCate)];

        setCategories(uniCate);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleCtgChange = (ctg) => {
    console.log(ctg);
    const filterProducts = products.filter(
      (product) => product.category === ctg
    );
    setFilterProducts(filterProducts);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="App">
      <h1>Product List</h1>
      <Filter categories={categories} handleCtgChange={handleCtgChange} />
      <ProductCollection
        products={filterProducts.length > 0 ? filterProducts : products}
      />
    </div>
  );
}
