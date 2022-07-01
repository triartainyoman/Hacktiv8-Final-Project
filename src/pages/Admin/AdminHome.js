import React, { useState, useEffect } from "react";

function AdminHome() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const reponse = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
      setIsLoading(false);
    };

    getProducts();
  }, []);

  return (
    <div>
      <h2 className="mb-3">Products</h2>
      <hr />
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td className="text-center" colSpan={4}>
                Loading...
              </td>
            </tr>
          ) : (
            products.map((product) => {
              return (
                <tr key={product.id}>
                  <td className="d-flex">
                    <img
                      style={{ height: 100 }}
                      src={product.image}
                      alt="Cart Photo Product"
                    />
                    <div className="ms-3">
                      <h5>{product.title}</h5>
                      <p>{product.description}</p>
                      <small>{product.category}</small>
                    </div>
                  </td>
                  <td>
                    <input type="number" min={0} value={20} />
                  </td>
                  <td>
                    <button className="btn btn-primary">Update</button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminHome;
