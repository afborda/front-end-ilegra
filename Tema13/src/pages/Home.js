import React from "react";
import Navigation from "../components/Navigation";
import { Main } from "../css/HomeStyle";
import ListMovies from "../components/ListMovies";
import { movies } from "../mock/MockListMovie";

const Home = () => {
  const nameMovie = movies[parseInt(Math.random() * 5, 10)].name;
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
