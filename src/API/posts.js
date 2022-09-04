import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:3500'
    baseURL: 'https://aditi-api-app.herokuapp.com'
});