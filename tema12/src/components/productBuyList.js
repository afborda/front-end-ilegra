import React from "react";
import { CartStyle, ItemsCartStyle } from "../css/styleCart";

const ListProduct = ({ list }) => {
  if (!list) {
    return false;
  }
  return (
    <ItemsCartStyle className="item-cart">
      {list.map(item => (
        <Item key={Math.random()} item={item} />
      ))}
    </ItemsCartStyle>
  );
};
const Item = ({ item }) => {
  return (
    <ul className="lista-cart" key={Math.random()}>
      <p>{item.nome}</p> <p>R${item.preco},00</p>
    </ul>
  );
};

export default ListProduct;
