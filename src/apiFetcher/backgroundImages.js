import axios from 'axios';

const BASE_URL = 'https://rolling-api.vercel.app/';

const customAxios = axios.create({
  baseURL: BASE_URL,
});

export const getBackgroundImages = async () => {
  return await customAxios({
    method: 'get',
    url: '/background-images/',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
