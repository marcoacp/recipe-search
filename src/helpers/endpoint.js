import axios from 'axios';

export const endPoint = axios.create({
    baseURL:'https://api.edamam.com/',
});