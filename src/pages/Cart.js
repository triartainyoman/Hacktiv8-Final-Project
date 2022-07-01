import React from "react";

function Cart() {
  return (
    <div>
      <h2>My Cart</h2>
      <hr />
      <table class="table">
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
          <tr>
            <td>
              <img
                style={{ height: 50 }}
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Cart Photo Product"
              />
            </td>
            <td>Product 1</td>
            <td>$10</td>
            <td>
              <input type="number" min={0} />
            </td>
            <td>$10</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <th>Total</th>
            <td></td>
            <td></td>
            <th>$10</th>
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
