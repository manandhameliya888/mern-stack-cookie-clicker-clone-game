import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const startGame = (username) =>
    api.post('/start', { username }).then((res) => res.data);

export const clickButton = (username) =>
    api.post('/click', { username }).then((res) => res.data);
