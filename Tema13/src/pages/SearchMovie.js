import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { SearchMovieStyle } from "../css/SearchMovieStyle";
import ListMovies from "../components/ListMovies";

const SearchMovie = () => {
  const [movieData, setMovieData] = useState("");

  const searchMovieData = event => {
    event.preventDefault();
  };

  const handleChange = e => {
    setMovieData(e.target.value);
  };

  return (
    <div>
      <Navigation />
      <SearchMovieStyle>
        <h1 className="title">Buscar Filme</h1>
        <form className="search-form">
          <input
            className="search-form-input--style"
            type="text"
            placeholder="Informe nome do Filme"
          />
          <button
            className="search-form-button--style"
            onClick={searchMovieData}
          >
            Pesquisar
          </button>
        </form>
      </SearchMovieStyle>
      {movieData !== "" ? <ListMovies data={movieData} /> : false}
    </div>
  );
};

export default SearchMovie;
