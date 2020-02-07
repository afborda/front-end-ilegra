import React, { useContext } from "react";
import { Navigation, HeaderStyle } from "../css/styleHeader";
import svgCar from "../assets/supermarket.svg";
import logoLoja from "../assets/logo_ricardo_eletro.png";
import produtosContext from "../context/produtosContext";
const Header = () => {
  let val = useContext(produtosContext);
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
                <p>{val}</p>
              </div>
            </li>
          </ul>
        </Navigation>
      </HeaderStyle>
    </>
  );
};
export default Header;
