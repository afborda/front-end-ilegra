import React, { useState } from "react";
import ModalMovie from "../components/ModalMovie";
import notFound from "../assets/404.jpg";

const LoadList = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [idMovie, setIdMovie] = useState("");

  const handleClick = e => {
    setIdMovie(e.target.id);
    setOpenModal(!openModal);
  };

  return (
    <>
      <ul className="movie-list">
        {data.map(movie => (
          <li key={movie.imdbID} className="resume-movie">
            {movie.Poster === "N/A" ? (
              <img
                className="resume-movie-img"
                src={notFound}
                alt={movie.Title}
              />
            ) : (
              <img
                className="resume-movie-img"
                src={movie.Poster}
                alt={movie.Title}
              />
            )}

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
                id={idMovie}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LoadList;
