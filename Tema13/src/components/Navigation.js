import React from "react";
import LogoImdb from "../assets/logoImdb.png";
import { Header, Nav } from "../css/NavigationStyle";
import { Link } from "react-router-dom";

const Navigation = () => (
  <Header>
    <Nav>
      <div className="logo-img">
        <img
          className="logo-img--style"
          src={LogoImdb}
          alt="Logo Imdb Movies"
        />
      </div>
      <div className="navigation">
        <ul className="list-navigation">
          <li className="list-navigation-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="list-navigation-item">
            <Link to="/movie-list">Busca Filme</Link>
          </li>
        </ul>
      </div>
    </Nav>
  </Header>
);

export default Navigation;
