import React from "react";
import Modal from "react-responsive-modal";
import useAxios from "axios-hooks";
import { Section } from "../css/ModalMoviesStyle";

const ModalMovie = props => {
  const [{ data }] = useAxios(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_SECRET_KYE}&i=${props.idMovie}`
  );

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      closeOnEsc={props.closeOnEsc}
      center
    >
      <div>
        <h1>
          {data !== undefined ? (
            <Section>
              <h1>{data.Title}</h1>
              <img src={data.Poster} alt={data.Title} />
              <div>
                <p>Release: {data.Released}</p>
                <p>Tempo de Duração: {data.Runtime}</p>
                <p>Genero: {data.Genre}</p>
                <p>Diretor: {data.Director}</p>
                <p>Limgua Nativa: {data.Language}</p>
                <p>Pontuação: {data.Metascore}</p>
                <p>Numero de Votos: {data.imdbVotes}</p>
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
