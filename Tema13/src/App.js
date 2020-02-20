import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
<<<<<<< HEAD
import GlobalStyle from "./css/GlobalStyle";

const App = () => (
  <Router>
    <Routes />
    <GlobalStyle />
  </Router>
);
=======
//import { MovieProvider } from "./context/MovieContext";
import GlobalStyle from "./css/GlobalStyle";

const App = () => {
  return (
    <Router> 
      <Routes />
      <GlobalStyle /> 
    </Router>
  );
};
>>>>>>> a21240d9994c1948686cb4f66307e479c560e513

export default App;
