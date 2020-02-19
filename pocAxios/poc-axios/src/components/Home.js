import React, { useState } from "react";
import useAxios from "axios-hooks";

const Home = () => {
  const [{ data, loading, error }] = useAxios(
    "ttp://www.omdbapi.com/?apikey=140228f9&s=hulk"
  );

  console.log("teste", data.Search);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <h1> Home dos GUri</h1>
    </div>
  );
};

export default Home;
