import { Switch, Route } from "react-router-dom";
import React from "react";

import Cart from "./pages/shoppingCart/index";
import Home from "./pages/home/index";

export default function routes() {
  return (
    <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={"/Cart"} component={Cart} />
    </Switch>
  );
}
