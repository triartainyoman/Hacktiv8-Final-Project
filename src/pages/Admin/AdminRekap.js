import React from "react";

function AdminRekap() {
  return (
    <div>
      <h2>Rekapan Penjualan</h2>
      <hr />
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Harga</th>
            <th scope="col">Terjual</th>
            <th scope="col">Pendapatan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h4>Title Product</h4>
              <small>Category</small>
            </td>
            <td>$100</td>
            <td>10</td>
            <td>$1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminRekap;
