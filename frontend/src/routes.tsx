import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import UserProfile from "./view/UserProfile";
import Product from "./view/Product";
import ShoppingCart from "./view/ShoppingCart";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
