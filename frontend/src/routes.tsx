import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./view/Home";
import UserProfile from "./view/UserProfile";
import Product from "./view/Product";
import ShoppingCart from "./view/ShoppingCart";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/profile" component={UserProfile}></Route>
        <Route path="/cart" component={ShoppingCart}></Route>
        <Route path="/product" component={Product}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
