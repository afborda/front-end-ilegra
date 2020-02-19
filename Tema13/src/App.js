import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
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

export default App;
