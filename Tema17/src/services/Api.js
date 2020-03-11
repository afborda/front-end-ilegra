import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.episodate.com/api/',
});

export default api;
