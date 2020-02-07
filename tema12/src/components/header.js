import React, { useContext } from "react";
import { Navigation, HeaderStyle } from "../css/styleHeader";
import svgCar from "../assets/supermarket.svg";
import logoLoja from "../assets/logo_ricardo_eletro.png";
import { ProdutosContext } from "../context/produtosContext";
import { CartContext } from "../context/cartContext";

const Header = () => {
  let value = useContext(ProdutosContext);
  let item = useContext(CartContext);

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
                <img src={svgCar} alt="Carrinho de compras" />
                <p>{value}</p>
              </div>
              <div className="cartContent" style={{
                position: 'absolute',
                right: 60,
                height: 400,
                width: 300,
              }
              }>
                <ul>

                </ul>
              </div>
            </li>
          </ul>
        </Navigation>
      </HeaderStyle>

    </>
  );
};
export default Header;
