import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import SearchMovie from "./pages/SearchMovie";

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/movie">
        <Movie />
      </Route>
      <Route exact path="/movie-list">
        <SearchMovie />
      </Route>
    </Switch>
  );
};
