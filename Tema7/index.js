const http = require("http");
const dt = require("./DataFunc");
const axios = require("axios");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`The date and time are currently ${dt.myDateTime()}`);
    axios
      .get("https://economia.awesomeapi.com.br/json/list/USD-BRL/1")
      .then(r => {
        //console.log(r.data[0].varBid);
        console.log(r.data[0]);
      })
      .catch();
  })
  .listen(3000);
