import axios from 'axios';

const ApiManager = axios.create({
    baseURL: 'https://api.ohmycar.site',
    responseType: 'json',
    withCredentials: true,
});

export default ApiManager;