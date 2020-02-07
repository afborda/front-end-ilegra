import React from "react";
// import Departments from "./components/Departments";
import Users from "./components/User";
import Header from "./components/header";
// import Loading from "./components/Loading";
import "./App.css";

export const testeContext = React.createContext();
export const loadingTeste = React.createContext();

const App = () => {
  return (
    <div>
      <Header />
      {/* <Users /> */}
    </div>
  );
};

export default App;
