const dataMovies = require("../mock/MockMovies");

module.exports = {
  index(req, res) {
    return res.json(dataMovies);
  },

  filterCategory(req, res) {
    const movieFilter = req.body;

    if (movieFilter) {
      //category filter
      if (movieFilter.category) {
        switch (movieFilter.category) {
          case "topViewCategory":
            const categoryViews = {};

            dataMovies.forEach(movie => {
              if (!categoryViews[movie.category]) {
                categoryViews[movie.category] = movie.views;
              } else {
                categoryViews[movie.category] += movie.views;
              }
            });

            return res.json(categoryViews);
            break;

          default:
            const movies = dataMovies.filter(
              item => item.category === movieFilter.category
            );
            return res.json(movies);
            break;
        }
      }

      //name filter
      if (movieFilter.name) {
        const movies = dataMovies.filter(
          item => item.Title === movieFilter.Title
        );
        return res.json(movies);
      }
    }

    //no filter
    console.log("Invalid filter");
    return res.status(400).json({ error: "Invalid category " });
  }
};
