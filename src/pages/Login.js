import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const [error, setError] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      await fetch("https://fakestoreapi.com/users")
        .then((res) => res.json())
        .then((json) => setUsers(json));
    };

    getUsers();
  }, []);

  if (localStorage.getItem("login")) {
    return <Navigate to="/" />;
  }

  if (localStorage.getItem("loginAdmin")) {
    return <Navigate to="/admin/home" />;
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (email == "admin@bukapedia.com" && password == "admin123") {
      localStorage.setItem("loginAdmin", "true");
      navigate("/admin/home");
    }

    const filter = users.filter((user) => user.email == email);
    if (filter[0].email === email && filter[0].password === password) {
      localStorage.setItem("login", "true");
      navigate("/");
    }

    setError(true);
  };

  return (
    <div>
      <h2>Login</h2>
      <hr />
      <div className="row">
        <div className="col-md-4">
          {error ? (
            <div className="alert alert-danger" role="alert">
              Login gagal, email atau password salah
            </div>
          ) : (
            <></>
          )}

          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleChangeEmail}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChangePassword}
              />
            </div>
            <button
              type="submit"
              onClick={handleClick}
              className="btn btn-dark"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
