import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import UserProfile from "./view/UserProfile";
import ProductPage from "./view/Product/";
import ShoppingCart from "./view/ShoppingCart";
import Login from "./view/Login";
import Register from "./view/Register";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
