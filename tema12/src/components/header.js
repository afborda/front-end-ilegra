import React, { useContext } from "react";
import { Navigation, HeaderStyle } from "../css/styleHeader";
import svgCar from "../assets/supermarket.svg";
import logoLoja from "../assets/logo_ricardo_eletro.png";
import { ProdutosContext } from "../context/produtosContext";
import Cart from "../components/cart";

const Header = () => {
  let value = useContext(ProdutosContext);

  return (
    <>
      <HeaderStyle>
        <Navigation>
          <div className="img-logo">
            <img
              className="img-logo--size"
              src={logoLoja}
              alt="Logo Ricardo eletro"
            />
          </div>
          <ul className="navigation-list">
            <li className="navigation-list-item">
              <p className="navigation-list-item--style">Inicio</p>
            </li>
            <li className="navigation-list-item">
              <p className="navigation-list-item--style">Produtos</p>
            </li>
            <li className="navigation-list-item">
              <div className="navigation-list-cart--style">
                <img src={svgCar} alt="Carrinho de compras" />
                <p>{value}</p>
              </div>
              <Cart />
            </li>
          </ul>
        </Navigation>
      </HeaderStyle>
    </>
  );
};
export default Header;
