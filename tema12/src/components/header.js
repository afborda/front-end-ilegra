import React from "react";
import { Navigation, HeaderStyle } from "../css/styleHeader";
import svgCar from "../assets/supermarket.svg";
import logoLoja from "../assets/logo_ricardo_eletro.png";
const Header = () => {
  return (
    <>
      <HeaderStyle>
        <Navigation>
          <div>
            <img src={logoLoja} alt="Logo Ricardo eletro" />
          </div>
          <ul>
            <li>
              <p>Inicio</p>
            </li>
            <li>
              <p>Produtos</p>
            </li>
            <li>
              <div>
                <img src={svgCar} alt="Carrinho de copras" />
                <p>0</p>
              </div>
            </li>
          </ul>
        </Navigation>
      </HeaderStyle>
    </>
  );
};
export default Header;
