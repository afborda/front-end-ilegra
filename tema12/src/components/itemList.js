import React, { useState, useEffect, useContext } from "react";
import { StyleList } from "../css/styleItemList";
import { items } from "../mock";
import { buyItems } from "../buymock";
import { ProdutosContext } from "../context/produtosContext";
import { CartContext } from "../context/cartContext";

const ItemList = () => {
  const [count, setCount] = useContext(ProdutosContext);
  const [item, setItem] = useContext(CartContext);
  const [newProduct, setNewProduct] = useState(buyItems);

  useEffect(() => {
    setCount(newProduct.length);
    setItem(newProduct);
  }, [newProduct]);

  return (
    <StyleList>
      {items.map(produto => (
        <div className="product-item" key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].alt} />
          <h1 className="name-product">{produto.nome}</h1>
          <p
            className="
product-description"
          >
            {produto.descricao}
          </p>
          <p className="product-price"> R$:{produto.preco},00</p>
          <button
            onClick={() => setNewProduct([...newProduct, produto])}
            className="buy-button"
          >
            COMPRAR
          </button>
        </div>
      ))}
    </StyleList>
  );
};

export default ItemList;
