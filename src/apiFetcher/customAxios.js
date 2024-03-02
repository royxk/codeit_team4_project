import axios from 'axios';

const BASE_URL = 'https://rolling-api.vercel.app/4-6/';

const customAxios = axios.create({
  baseURL: BASE_URL,
});

export default customAxios;
