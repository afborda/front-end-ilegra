import api from './Api';

const getMovies = async () => {
  return await api.get(`most-popular?page=1`);
};

export default getMovies;
