import customAxios from '../customAxios.js';

export const patchMessage = async (data, id) => {
  return await customAxios({
    method: 'patch',
    url: `/messages/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      charset: 'utf-8',
    },
    data: data,
  });
};
