import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { SearchMovieStyle } from "../css/SearchMovieStyle";
import ListMovies from "../components/ListMovies";

const SearchMovie = () => {
  const [movieData, setMovieData] = useState("");


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
            onClick={() => console.log('ola')}
          >
            Pesquisar
          </button>
        </form>
      </SearchMovieStyle>
<<<<<<< HEAD
      {movieData !== "" ? <ListMovies data={movieData} /> : false}
    </>
=======
      {(movieData !== "") ? <ListMovies data={movieData} /> : false}
    </div>
>>>>>>> a21240d9994c1948686cb4f66307e479c560e513
  );
};

export default SearchMovie;
