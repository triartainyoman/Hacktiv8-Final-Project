import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Card from "../components/ProductCard/Card";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products?limit=30")
        .then((res) => res.json())
        .then((json) => setProducts(json));
      setIsLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="row">
        <div className="col-md-3">
          <Skeleton height={350} baseColor="darkgrey" />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} baseColor="darkgrey" />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} baseColor="darkgrey" />
        </div>
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <div className="row">
        {products.map((product, index) => {
          return (
            <Card
              key={index}
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
      {isLoading == true ? <Loading /> : <ShowProducts />}
    </div>
  );
}

export default Home;
