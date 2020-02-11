import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import ProductBuyList from "../components/productBuyList";

const Cart = () => {
  const [productBuy] = useContext(CartContext);

  const amount =
    productBuy !== undefined && productBuy.length > 0
      ? productBuy.reduce((initialValue, finalValue) => {
          return parseFloat(initialValue) + parseFloat(finalValue.preco);
        }, 0)
      : false;

  return (
    <>
      <div className="cartContent">
        <h1>Teste</h1>
        <ProductBuyList list={productBuy} />
        <div>
          {productBuy !== undefined && productBuy.length > 0 ? (
            <p> R$:{amount},00</p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
