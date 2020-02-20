import styled from "styled-components";

export const Header = styled.header``;

export const Nav = styled.nav`
  background: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;

  .logo-img {
    width: 80px;
    height: 50px;
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .logo-img--style {
    max-width: 100%;
  }

  .navigation {
  }

  .list-navigation {
    display: flex;
  }

  .list-navigation-item {
    padding: 20px 0;
  }

  .list-navigation-item a {
    padding: 30px 20px;
    color: #fff;
    font-size: 1.2em;
  }
`;
