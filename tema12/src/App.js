import React from "react";
import Header from "./components/header";
import ItemsList from "./components/itemList";
import GlobalStyle from "./css/styleGlobal";
import { Provider } from "./context/produtosContext";
import { CartProvider } from "../src/context/cartContext";
import Cart from "./components/cart";

const App = () => {
  return (
    <>
      <CartProvider>
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
