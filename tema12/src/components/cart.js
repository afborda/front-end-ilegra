import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import ProductBuyList from "../components/productBuyList";
import { CartStyle } from "../css/styleCart";

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
        <CartStyle>
          <h1 className="title">Carrinho</h1>
          <ProductBuyList list={productBuy} />
          <div>
            {productBuy !== undefined && productBuy.length > 0 ? (
              <p className="amount--style"> Total a pagar: R$:{amount},00</p>
            ) : (
              <p></p>
            )}
          </div>
        </CartStyle>
      </div>
    </>
  );
};

export default Cart;
