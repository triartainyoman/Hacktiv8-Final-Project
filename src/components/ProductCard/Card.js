import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Card(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch({
      type: "INCREMENT_CART",
    });
  };

  return (
    <div className="col-md-3 mb-3">
      <div className="card p-3">
        <img
          src={props.imageUrl}
          className="card-img-top"
          alt="Product Image"
          height={250}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <div className="badge bg-success mb-2">{props.category}</div>
          <p className="card-text text-bold fw-bold lead">${props.price}</p>
          <center>
            <Link
              to={"/product/" + props.id}
              className="btn btn-outline-dark me-2"
            >
              Buy Product
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Card;
