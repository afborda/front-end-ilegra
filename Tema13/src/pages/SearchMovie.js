import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { SearchMovieStyle } from "../css/SearchMovieStyle";
import ListMovies from "../components/ListMovies";

const SearchMovie = () => {
  const [movieData, setMovieData] = useState("");


  const preventDefault = event => {

  };

  const handleSubmit = (event) => {
    setMovieData(event.target.value)
    console.log(movieData)

  };

  return (
    <>
      <Navigation />
      <SearchMovieStyle>
        <h1 className="title">Buscar Filme</h1>
        <form onSubmit={event => event.preventDefault()} className="search-form">
          <input
            className="search-form-input--style"
            type="text"
            placeholder="Informe nome do Filme"
            value={movieData}
            onChange={handleSubmit}
          />
          <button className="search-form-button--style">
            Pesquisar
          </button>
        </form>
      </SearchMovieStyle>
      {movieData !== "" ? <ListMovies data={movieData} /> : false}
    </>
  );
};

export default SearchMovie;
