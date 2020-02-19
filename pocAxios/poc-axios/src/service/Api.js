import { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=140228f9&s="
});

const cache = new LRU({ max: 10 });

configure({ axios, cache });
