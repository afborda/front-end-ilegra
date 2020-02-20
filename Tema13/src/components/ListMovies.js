import React, { useEffect, useState } from "react";
import { Section } from "../css/listMovieStyle";
import ModalMovie from "../components/ModalMovie";
import api from "../service/api";

const ListMovies = props => {
  const [dataMovie, setDataMovie] = useState(props.data);
  const [openModal, setOpenModal] = useState(false);
  const [idMovie, setIdMovie] = useState("");
  const [listMovie, setListMovie] = useState([]);

  const fetchUsers = async () => {
    const getListMovie = await api.get(
      `?apikey=${process.env.REACT_APP_SECRET_KYE}&s=${dataMovie}`
    );
    setListMovie(getListMovie);
  };

  useEffect(() => {
    fetchUsers(listMovie);
  }, [listMovie]);

  const handleClick = e => {
    setIdMovie(e.target.id);
    setOpenModal(!openModal);
  };

  const validate = value => {
    return value.Search !== undefined;
  };

  console.log("teste", listMovie);

  return (
    <Section>
      {validate(listMovie) ? (
        <ul className="movie-list">
          {listMovie.data.Search.map(movie => (
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
                ></ModalMovie>
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
