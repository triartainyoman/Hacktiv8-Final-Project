import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
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
          <div className="badge bg-dark mb-2">{props.category}</div>
          <p className="card-text text-bold fw-bold lead">${props.price}</p>
          <Link
            to={"/product/" + props.id}
            className="btn btn-outline-dark me-2"
          >
            Detail
          </Link>
          <Link to="/cart" className="btn btn-dark">
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
