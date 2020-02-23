import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Main } from "../css/HomeStyle";
import ListMovies from "../components/ListMovies";
import { movies } from "../mock/MockListMovie";

const Home = () => {
  const [nameMovie, setNameMovie] = useState("");

  const generateRandomName = () => {
    const value = movies[parseInt(Math.random() * movies.length)];
    setNameMovie(value.name);
  };

  useEffect(() => {
    generateRandomName();
  }, []);

  return (
    <>
      <Navigation />
      <Main>
        <ListMovies data={nameMovie} />
      </Main>
    </>
  );
};

export default Home;
