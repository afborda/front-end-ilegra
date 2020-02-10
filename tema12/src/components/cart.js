import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import { items } from "../mock";

const Cart = () => {
  const [item, setItem] = useContext(CartContext);

  console.log(item);
  return (
    <>
      {item !== undefined && item !== [] ? (
        <div className="cartContent">
          <h1>
            {item.map(items => (
              <h1>{items.nome}</h1>
            ))}
          </h1>
        </div>
      ) : (
        <div className="cartContent">
          <h1>Teste</h1>
        </div>
      )}
    </>
  );
};

export default Cart;
