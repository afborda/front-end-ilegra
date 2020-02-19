import React, { useEffect, useState } from "react";
import { Section } from "../css/listMovieStyle";
import useAxios from "axios-hooks";
import api from '../service/api';

const ListMovies = async (props) => {
  const [data, setData] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      loadData();
    }, 2000); 
  }, [])

  async function loadData() {
    const comingdata = await api.get(`s=${props.data}`);
    setData(comingdata);
    console.log(comingdata)
  }

  return (
    <Section>
      {(
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
      )}
    </Section>
  );
};

export default ListMovies;
