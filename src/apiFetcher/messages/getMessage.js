import customAxios from '../customAxios.js';

export const getMessage = async id => {
  return await customAxios({
    method: 'get',
    url: `/messages/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      charset: 'utf-8',
    },
  });
};
