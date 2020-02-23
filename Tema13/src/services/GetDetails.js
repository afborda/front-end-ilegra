import api from "./api";

const GetMovies = async data => {
  return await api.get(
    `/?apikey=${process.env.REACT_APP_SECRET_KYE}&i=${data}`
  );
};

export default GetMovies;
