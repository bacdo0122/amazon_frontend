import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import ProductPrivate from "./pages/ProductPrivate";
import Login from "./pages/Login";
import Register from "./pages/Register";
import React, { useEffect } from "react";
import CartList from "./pages/CartList";
import Home from "./pages/Home";
import MyProduct from "./pages/MyProduct";
import Update from "./pages/Update";
function App() {
  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify({ total: 0, products: [] }));
    }
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Home />} path="/" index />
          <Route element={<Product />} path="/products" index />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<ProductPrivate />} path="/products/:id" />
          <Route element={<CartList />} path="/cart" />
          <Route element={<MyProduct />} path="/my_products" />
          <Route element={<Update />} path="/my_products/:id" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
