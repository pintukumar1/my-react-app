import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-6cecd.firebaseio.com/'
});

export default instance;