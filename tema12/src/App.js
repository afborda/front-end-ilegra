import React, { useState, useContext } from "react";
import Header from "./components/header";
import ItemsList from "./components/itemList";
import GlobalStyle from "./css/styleGlobal";
import { Provider, ProdutosContext } from "./context/produtosContext";
import { buyItems } from "./buymock";
import {CartProvider} from '../src/context/cartContext';

const App = () => {

  return (
    <>
      <CartProvider >
        <Provider>
          <Header />
          <ItemsList />
          <GlobalStyle />
        </Provider>
      </CartProvider>
    </>
  );
};

export default App;
