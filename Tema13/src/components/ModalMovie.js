import React, { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import { Section } from "../css/ModalMoviesStyle";
import GetDetails from "../services/GetDetails";

const ModalMovie = ({ id, open, onClose, closeOnEsc }) => {
  const [dataMovies, setDataMovies] = useState();

  const loadData = async () => {
    const getDetails = await GetDetails(id);
    setDataMovies(getDetails.data);
  };

  useEffect(() => {
    loadData();
  }, [id]);

  return (
    <Modal open={open} onClose={onClose} closeOnEsc={closeOnEsc} center>
      <div>
        <h1>
          {dataMovies !== undefined ? (
            <Section>
              <h1>{dataMovies.Title}</h1>
              <img src={dataMovies.Poster} alt={dataMovies.Title} />
              <div>
                <p>Release: {dataMovies.Released}</p>
                <p>Tempo de Duração: {dataMovies.Runtime}</p>
                <p>Genero: {dataMovies.Genre}</p>
                <p>Diretor: {dataMovies.Director}</p>
                <p>Nativa: {dataMovies.Language}</p>
                <p>Pontuação: {dataMovies.Metascore}</p>
                <p>Numero de Votos: {dataMovies.imdbVotes}</p>
              </div>
            </Section>
          ) : (
            <h1>Não encontrado!</h1>
          )}
        </h1>
      </div>
    </Modal>
  );
};

export default ModalMovie;
