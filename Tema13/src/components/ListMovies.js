import React, { useEffect, useState } from "react";
import { Section } from "../css/listMovieStyle";
<<<<<<< HEAD
import ModalMovie from "../components/ModalMovie";
<<<<<<< HEAD
import api from "../service/api";
=======
import api from "../services/api";
>>>>>>> 5482e31cca0380824397a3f7c4e849e7843dda97

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
=======
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
>>>>>>> a21240d9994c1948686cb4f66307e479c560e513
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
<<<<<<< HEAD
      ) : (
        <h1>Filme Não Encontrado</h1>
=======
>>>>>>> a21240d9994c1948686cb4f66307e479c560e513
      )}
    </Section>
  );
};

export default ListMovies;
