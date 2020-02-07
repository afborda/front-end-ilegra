import styled from "styled-components";

export const StyleList = styled.main`
  display: flex;
  max-width: 1280px;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 30px;
  .produto-item {
    max-width: 250px;
    margin: 0 auto;
    margin-top: 30px;
  }
  .nome-protduto {
    color: #515c6f;
    font-size: 18px;
    padding: 10px;
  }
  .descricao-produto {
    color: #515c6f;
  }
  .produto-preco {
    padding: 15px 15px 15px 25px;
    color: #ff4d4d;
    font-weight: bold;
    font-size: 20px;
  }
  .botao-comprar {
    width: 100%;
    background: #ff4d4d;
    border-radius: 18px;
    height: 40px;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }

  div img {
    border-radius: 5px;
    box-shadow: 6px 7px 70px -17px rgba(0, 0, 0, 0.75);
    width: 100%;
  }
`;
