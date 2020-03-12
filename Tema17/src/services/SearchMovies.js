import api from './Api';

const searchMovies = async name => {
  return await api.get(`search?q=${name}&page=1`);
};

export default searchMovies;
