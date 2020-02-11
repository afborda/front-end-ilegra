import styled from "styled-components";

export const Navigation = styled.nav`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 10px;
  .img-logo--size {
    width: 160px;
    height: 48px;
  }
  .img-logo {
    display: flex;
  }
  .navigation-list {
    align-items: center;
    display: flex;
    list-style: none;

    .navigation-list-item {
      margin: 0 10px 0 10px;
    }

    .navigation-list-item--style {
      color: #fff;
    }
    & .navigation-list-cart--style {
      width: 70px;
      height: 48px;
      background: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 8px;
      box-shadow: 0px 0px 5px 0px;
    }

    & div img {
      width: 20px;
    }
    & .cartContent {
      position: absolute;
      right: 60px;
      height: 400px;
      width: 300px;
      background: #ffff;
      border-radius: 8px;
      box-shadow: 0px 0px 5px 0px;
      padding: 20px;
      overflow-y: auto;
    }
  }
`;

export const HeaderStyle = styled.header`
  background: #000000;
  display: flex;
  justify-content: center;
`;
