import React from "react";
import Header from "./components/header";
import ItemsList from "./components/itemList";
import GlobalStyle from "./css/styleGlobal";
import ProdutosContext from "./context/produtosContext";
import { items } from "./mock";

const App = () => {
  const listProdutos = items.map(item => item.nome);

  return (
    <>
      <ProdutosContext.Provider value={listProdutos}>
        <Header />
        <ItemsList />
        <GlobalStyle />
      </ProdutosContext.Provider>
    </>
  );
};

export default App;
