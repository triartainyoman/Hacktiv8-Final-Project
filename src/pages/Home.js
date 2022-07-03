import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/ProductCard/Card";

function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) =>
          dispatch({
            type: "SET_PRODUCTS",
            payload: json,
          })
        );
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
        {state.allProducts.map((product, index) => {
          return (
            <Card
              key={index}
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
