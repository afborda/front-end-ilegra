import React from "react";
import LogoImdb from "../assets/logoImdb.png";
import { Header, Nav } from "../css/NavigationStyle";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
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
              <Link to="/">Home</Link>
            </li>
            <li className="list-navigation-item">
              <Link to="/movie">Movie</Link>
            </li>
            <li className="list-navigation-item">
              <Link to="/movie-list">Search Movie</Link>
            </li>
          </ul>
        </div>
      </Nav>
    </Header>
  );
};

export default Navigation;
