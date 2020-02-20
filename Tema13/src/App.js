import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import GlobalStyle from "./css/GlobalStyle";

const App = () => (
  <Router>
    <Routes />
    <GlobalStyle />
  </Router>
);

export default App;
