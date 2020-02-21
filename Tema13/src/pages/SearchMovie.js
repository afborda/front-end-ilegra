import React, { useState,  useEffect } from "react";
import Navigation from "../components/Navigation";
import { SearchMovieStyle } from "../css/SearchMovieStyle";
import ListMovies from "../components/ListMovies";

const SearchMovie = () => {
  const [movieData, setMovieData] = useState('');
  const [inputText, setInputText] = useState('');

  const preventDefault = event => {

  };

  const handleSubmit = () => {
    setMovieData(inputText)
    console.log(movieData)
  };

 
 //tinha esquecido do preventDefault aii o negocio nao parava de renderizar sempre porque é um form    #raiva hahahahah

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
            value={inputText}
            onChange={event => setInputText(event.target.value)}
          />
          <button onClick={handleSubmit} className="search-form-button--style">
            Pesquisar
          </button>
        </form>
      </SearchMovieStyle>
      {movieData !== "" ? <ListMovies data={movieData} /> : false}
    </>
  );
};

export default SearchMovie;
