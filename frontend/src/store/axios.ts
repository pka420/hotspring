import axios from 'axios';

let baseURL = 'http://localhost:8000';

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});


export default axiosInstance;




