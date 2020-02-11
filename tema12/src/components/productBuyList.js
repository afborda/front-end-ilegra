import React from "react";

const ListProduct = ({ list }) => {
  if (!list) {
    return false;
  }
  return (
    <ul>
      {list.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};
const Item = ({ item }) => {
  return (
    <li>
      {item.nome} {item.preco}
    </li>
  );
};

export default ListProduct;
