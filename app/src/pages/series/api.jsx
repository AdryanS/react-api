import axios from "axios";

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://react-api.paodevbatata.repl.co/series/'
});

export default api