import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import ProductBuyList from "../components/productBuyList";

const Cart = () => {
  const [productBuy, setproductBuy] = useContext(CartContext);

  return (
    <>
      <div className="cartContent">
        <h1>Teste</h1>
        <ProductBuyList list={productBuy} />
      </div>
    </>
  );
};

export default Cart;
