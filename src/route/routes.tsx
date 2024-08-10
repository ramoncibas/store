import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LinkedInCallback } from "react-linkedin-login-oauth2";

import {
  Home,
  UserProfile,
  ProductPage,
  ShoppingCart,
  Login,
  Register
} from "../pages"

type RouterProps = {};

const Router: FC<RouterProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/filter" element={<Home />} />
        <Route path="/login" element={<Login.Page />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/profile/:uuid" element={<UserProfile />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/linkedin" element={<LinkedInCallback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
