import React, { useEffect, useState } from "react";
import { Section } from "../css/listMovieStyle";
import ModalMovie from "../components/ModalMovie";
import api from "../service/api"; // aqui estava services ao inves de service no singular

const ListMovies = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [idMovie, setIdMovie] = useState("");
  const [listMovie, setListMovie] = useState([]);

  console.log(data);

  const loadData = async () => {
    const getListMovie = await api.get(
      `/?apikey=${process.env.REACT_APP_SECRET_KYE}&s=${data}`
    ); //coloquei toda a rota depois do ".com/";
    setListMovie(getListMovie.data);
  };

  useEffect(() => {
    loadData();
  }, [data]);

  const handleClick = e => {
    setIdMovie(e.target.id);
    setOpenModal(!openModal);
  };

  const validate = value => {
    return value !== undefined;
  };

  return (
    <Section>
      {validate(listMovie.Search) ? (
        <ul className="movie-list">
          {listMovie.Search.map(movie => (
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
                <button
                  id={movie.imdbID}
                  onClick={handleClick}
                  className="button-details--style"
                >
                  Saiba Mais!
                </button>
                <ModalMovie
                  open={openModal}
                  onClose={handleClick}
                  closeOnEsc={openModal}
                  idMovie={idMovie}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Filme Não Encontrado</h1>
      )}
    </Section>
  );
};

export default ListMovies;
