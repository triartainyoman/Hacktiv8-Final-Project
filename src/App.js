import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Header from "./components/Header/Header";
import AdminHome from "./pages/Admin/AdminHome";
import AdminRekap from "./pages/Admin/AdminRekap";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/rekap" element={<AdminRekap />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
