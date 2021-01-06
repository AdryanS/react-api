import axios from "axios";

const api = axios.create({
    baseURL: '/series'
});

export default api