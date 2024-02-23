import axios from 'axios';

//Base url https://api.themoviedb.org/3/

// Url api /movie/550?api_key=066fc9df8fb9e65ef60aa80c16153f04&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})


export default api;