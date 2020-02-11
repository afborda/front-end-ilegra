import React from "react";

const ListProduct = ({ list }) => {
  if (!list) {
    return false;
  }
  return (
    <ul>
      {list.map(item => (
        <Item key={Math.random()} item={item} />
      ))}
    </ul>
  );
};
const Item = ({ item }) => {
  return (
    <li key={Math.random()}>
      {item.nome} {item.preco}
    </li>
  );
};

export default ListProduct;
