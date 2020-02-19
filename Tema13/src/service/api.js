const axios = require("axios").default;

const getMovies = value => {
  axios
    .get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_SECRET_KYE}&s=${value}`
    )
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
