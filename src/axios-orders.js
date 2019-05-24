import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://196.6.217.21:8243'
});

export default instance;