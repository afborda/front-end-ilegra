const axios = require("axios").default;

const api = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_SECRET_KYE}&`,
})
// const getMovies = value => {
//   axios
//     .get(
//       `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_SECRET_KYE}&s=${value}`
//     )
//     .then(function(response) {
//       console.log(response);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// };

export default api;