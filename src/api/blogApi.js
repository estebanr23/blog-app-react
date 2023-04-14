import axios from "axios"
import { getEnvVariables } from "../helpers";

const { VITE_API_URL } = getEnvVariables();

// Creo una instancia de axios y la exporto para generar las peticiones 
const blogApi =  axios.create({
    baseURL: VITE_API_URL,
});

blogApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    }

    return config;
});

export default blogApi;