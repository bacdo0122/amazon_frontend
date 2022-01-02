/* eslint-disable */
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
  // const iProduction = process.env.NODE_ENV === "production";
  const direction = "";
  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify({ total: 0, products: [] }));
    }
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Home />} path={`${direction}/`} index />
          <Route element={<Product />} path={`${direction}/products`} index />
          <Route element={<Login />} path={`${direction}/login`} />
          <Route element={<Register />} path={`${direction}/register`} />
          <Route
            element={<ProductPrivate />}
            path={`${direction}/products/:id`}
          />
          <Route element={<CartList />} path={`${direction}/cart`} />
          <Route element={<MyProduct />} path={`${direction}/my_products`} />
          <Route element={<Update />} path={`${direction}/my_products/:id`} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
