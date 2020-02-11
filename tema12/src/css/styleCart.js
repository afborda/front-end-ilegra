import styled from "styled-components";

export const CartStyle = styled.section`
  display: flex;
  flex-direction: column;
  .title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  .amount--style {
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #ff4d4d;
    font-size: 40px;
    color: #fff;
  }
`;

export const ItemsCartStyle = styled.div`
  .lista-cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    max-width: 100%;
  }
`;
