import React, { useState } from "react";
import { StyleList } from "../css/styleItemList";
import { items } from "../mock";
// import { produtoContext } from "../context/produtoContext";

const ItemList = () => {
  const [produtos] = useState(items);

  // nome, preco
  // const [value, setValue] = useContext(produtoContext);
  // const addProduto = () => {
  //   const produto = { nome, preco };
  //   setValue(current => [...current, produto]);
  // };

  return (
    <StyleList>
      {produtos.map(produto => (
        <div className="produto-item" key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].alt} />
          <h1 className="nome-protduto">{produto.nome}</h1>
          <p className="descricao-produto">{produto.descricao}</p>
          <p className="produto-preco"> R$:{produto.preco},00</p>
          <button className="botao-comprar">COMPRAR</button>
        </div>
      ))}
    </StyleList>
  );
};

export default ItemList;
