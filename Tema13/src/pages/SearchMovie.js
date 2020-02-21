import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { SearchMovieStyle } from "../css/SearchMovieStyle";
import ListMovies from "../components/ListMovies";

const SearchMovie = () => {
  const [movieData, setMovieData] = useState("");

  const searchMovieData = event => {
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
        
          />
          <button
            className="search-form-button--style"
            onClick={()=> setMovieData('hulk')}
          >
            Pesquisar
          </button>
        </form>
      </SearchMovieStyle>
      {movieData !== "" ? <ListMovies data={movieData} /> : false}
    </>
  );
};

export default SearchMovie;
