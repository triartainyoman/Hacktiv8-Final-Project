import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Card from "../components/ProductCard/Card";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
      setIsLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div
        style={{
          width: "100vw",
          heigth: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Loading...</p>
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <div className="row">
        {products.map((product, index) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              imageUrl={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <h2 className="mb-3">Products</h2>
      <hr />
      {isLoading == true ? <Loading /> : <ShowProducts />}
    </div>
  );
}

export default Home;
