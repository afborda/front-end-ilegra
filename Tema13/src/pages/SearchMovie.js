import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { SearchMovieStyle } from "../css/SearchMovieStyle";
import ListMovies from "../components/ListMovies";

const SearchMovie = () => {
  const [movieData, setMovieData] = useState("");

  const searchMovieData = event => {
    setMovieData(event.target.value);
    event.preventDefault();
  };

  const handleChange = event => {
    setMovieData(event.target.value);
  };

  return (
    <>
      <Navigation />
      <SearchMovieStyle>
        <h1 className="title">Buscar Filme</h1>
        <form className="search-form">
          <input
            className="search-form-input--style"
            type="text"
            placeholder="Informe nome do Filme"
            onChange={handleChange}
          />
          <button
            className="search-form-button--style"
            onClick={searchMovieData}
          >
            Pesquisar
          </button>
        </form>
      </SearchMovieStyle>
      {movieData !== "" ? (
        <ListMovies data={movieData} />
      ) : (
        <h1>Não foi Possivel encontrar filmes!</h1>
      )}
    </>
  );
};

export default SearchMovie;
