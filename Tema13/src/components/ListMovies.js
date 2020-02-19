import React, { useEffect, useState } from "react";
import { Section } from "../css/listMovieStyle";
import useAxios from "axios-hooks";

const ListMovies = props => {
  const [{ data, loading }] = useAxios(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_SECRET_KYE}&s=${props.data}`
  );

  useEffect(() => {}, [data]);

  return (
    <Section>
      {!loading ? (
        <ul className="movie-list">
          {data.Search.map(movie => (
            <li key={movie.imdbID} className="resume-movie">
              <img
                className="resume-movie-img"
                src={movie.Poster}
                alt={movie.Title}
              />
              <h2>Nome:{movie.Title}</h2>
              <p> Ano: {movie.Year}</p>
              <p>Tipo: {movie.Type}</p>
              <div className="button-details">
                <button className="button-details--style">Saiba Mais!</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        false
      )}
    </Section>
  );
};

export default ListMovies;
