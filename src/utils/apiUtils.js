import axios from "axios";

const api = axios.create({
    baseURL: "https://movie0706.cybersoft.edu.vn/api/"
})

export default api;