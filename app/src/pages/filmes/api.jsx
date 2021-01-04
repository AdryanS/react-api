import axios from "axios";

const api = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://react-api.paodevbatata.repl.co/filmes/"
});

export default api