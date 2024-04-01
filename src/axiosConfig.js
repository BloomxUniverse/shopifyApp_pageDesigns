import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_GEMTOOL_API_URL,
  // You can also add other default config options here, such as headers
});

export default instance;