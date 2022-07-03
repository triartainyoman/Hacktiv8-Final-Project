import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Detail() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/" + id)
        .then((res) => res.json())
        .then((json) => setProduct(json));
      setIsLoading(false);
    };
    getProduct();
  }, []);

  const increaseCart = () => {
    dispatch({
      type: "INCREMENT_CART",
      payload: qty,
    });
  };

  const addProduct = () => {
    dispatch({
      type: "SELECT_PRODUCT",
      payload: product,
      qty: qty,
    });
  };

  const handleChange = (e) => {
    setQty(e.target.value);
  };

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
        <div>Loading...</div>
      </div>
    );
  };

  const DetailProduct = () => {
    return (
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-thumbnail"
            src={product.image}
            alt="Product Image"
          />
        </div>
        <div className="col-md-6">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="text-black text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Detail Product
              </li>
            </ol>
          </nav>
          <h1 className="fw-bold">{product.title}</h1>
          <div className="badge bg-dark mb-4">{product.category}</div>
          <h2 className="fw-bold mb-3">${product.price}</h2>
          <div className="w-20">
            <select
              className="form-select w-25 mb-3"
              aria-label="Default select example"
            >
              <option>Select Size</option>
              <option value="1">S</option>
              <option value="2">M</option>
              <option value="3">L</option>
              <option value="3">XL</option>
            </select>
          </div>
          <div className="d-flex mb-4">
            <input
              type="number"
              className="form-control me-3"
              style={{ width: "80px" }}
              value={qty}
              onChange={handleChange}
              min={0}
            />
            <button
              className="btn btn-dark d-flex align-items-center"
              onClick={addProduct}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="me-2 bi bi-cart"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              Add to Cart
            </button>
          </div>
          <h4>Product Details</h4>
          <hr />
          <p>{product.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2 className="mb-3">Detail Product</h2>
      {isLoading ? <Loading /> : <DetailProduct />}
    </div>
  );
}

export default Detail;
