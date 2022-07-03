import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // const [grandTotal, setGrandTotal] = useState(0);
  let grandTotal = 0;

  if (!localStorage.getItem("login")) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>My Cart</h2>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {state.selectedProducts.map((product, index) => {
            let subTotal = parseFloat(product.price) * parseInt(product.qty);
            grandTotal += subTotal;
            return (
              <tr key={index}>
                <td>
                  <img
                    style={{ height: 50 }}
                    src={product.image}
                    alt={product.title}
                  />
                </td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                  <input
                    type="number"
                    min={0}
                    value={product.qty}
                    onChange={() => console.log("changed")}
                  />
                </td>
                <td>${subTotal}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <th>Total</th>
            <td></td>
            <td></td>
            <th>${grandTotal}</th>
          </tr>
        </tfoot>
      </table>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-end">
          <button className="btn btn-dark">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
