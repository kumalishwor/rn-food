import axios from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos',
    // headers: {
    //     Authorization: 'Bearer APISECRETKEY'
    // }
})