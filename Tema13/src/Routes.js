import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchMovie from "./pages/SearchMovie";

export default () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/movie-list">
      <SearchMovie />
    </Route>
  </Switch>
);
