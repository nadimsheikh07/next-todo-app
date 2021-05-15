import axios from 'axios';

let instance = axios.create({
    baseURL: process.env.API_URL,
});

export const apiConfig = instance
