import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import Home from "./view/Home/Home";
import UserProfile from "./view/Customer/pages/Profile";
import ProductPage from "./view/Product/pages/ProductDetails";
import ShoppingCart from "./view/Product/pages/ProductShoppingCart";
import Login from "./view/Customer/pages/Login";
import Register from "./view/Customer/pages/Register";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<Home />} />
        <Route path="/login" element={<Login.Page />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/linkedin" element={<LinkedInCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;