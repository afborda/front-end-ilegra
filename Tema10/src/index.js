const axios = require("axios");
import "./css/main.scss";

function seachMovie() {
  const apyKey = "140228f9";
  const urlBase = "http://www.omdbapi.com/?";
  const movieName = document.getElementById("nameMovie").value;
  axios
    .get(`${urlBase}apikey=${apyKey}&t=${movieName}`)
    .then(response => {
      mostrafilme(response);
    })
    .catch(error => {
      console.log(error);
    });
}
const mostrafilme = response => {
  console.log(response);
  response.data.Poster != "N/A" &&  response.data.Poster != null? 
  document.getElementById("posterMovie").src = response.data.Poster:
  document.getElementById("posterMovie").src = "src/assets/No-Image-Available.png"
};

document.getElementById("buttom").addEventListener("click", () => {
  seachMovie();
  event.preventDefault();
});
