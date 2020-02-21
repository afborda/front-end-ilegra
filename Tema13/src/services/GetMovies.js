import api from '../service/api';

const GetMovies = async (data) => {
  return await api.get(`/?apikey=${process.env.REACT_APP_SECRET_KYE}&s=${data}`);

}

export default GetMovies;
