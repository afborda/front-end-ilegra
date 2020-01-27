const http = require("http");
const fetch = require("node-fetch");

const SpotifyWrapper = require("spotify-wrapper").default;
const tokenUser =
  "BQDgQxfPTn7gDG9B2gHfhjMyhW8nfjDpCMUgNFcgSH2rcs3v7sKLiLCsvdDOXzKGawq7ZbDi0ev1v397jsxn_donPtDlI5HzwIhnbQBV5a8KsQ3rudO2Ez6e8yjx-a5dwGCSVE4wLL0";

const spotify = new SpotifyWrapper({
  token: tokenUser
});
const port = process.env.PORT || 8888;

const server = http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    req.end(
      spotify.search.albums("Galileu").then(data => {
        console.log(data);
      })
    );
  })
  .listen(port);
