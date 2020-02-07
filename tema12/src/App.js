import React from "react";
import Header from "./components/header";
import ItemsList from "./components/itemList";
import GlobalStyle from "./css/styleGlobal";

const App = () => {
  return (
    <>
      <Header />
      <ItemsList />
      <GlobalStyle />
    </>
  );
};

export default App;
