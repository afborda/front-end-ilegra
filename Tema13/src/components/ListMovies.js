import React, { useEffect, useState } from "react";
import { Section } from "../css/listMovieStyle";
import LoadList from "../components/loadList";
import GetMovies from "../services/GetMovies";

const ListMovies = ({ data }) => {
  const [listMovie, setListMovie] = useState([]);

  const loadData = async () => {
    const getListMovie = await GetMovies(data);
    setListMovie(getListMovie.data);
  };

  useEffect(() => {
    loadData();
  }, [data]);

  const validate = value => {
    return value !== undefined;
  };

  return (
    <Section>
      {validate(listMovie.Search) ? (
        <LoadList data={listMovie.Search} />
      ) : (
        <h1>Filme Não Encontrado</h1>
      )}
    </Section>
  );
};

export default ListMovies;
