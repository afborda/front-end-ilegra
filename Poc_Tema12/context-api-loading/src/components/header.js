import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background: #0cc;
  padding: 30px;
`;

const Header = () => {
  return (
    <>
      <header>
        <Nav className="navigation">
          <div className="logo">Logo</div>
          <ul className="Links">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Comprar</a>
            </li>
            <li>
              <a href="#"></a> Carrinho
            </li>
          </ul>
        </Nav>
      </header>
    </>
  );
};

export default Header;
