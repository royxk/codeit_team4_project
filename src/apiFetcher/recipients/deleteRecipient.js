import customAxios from '../customAxios.js';

export const deleteRecipient = async (id) => {
  return await customAxios({
    method: 'delete',
    url: `/recipients/${id}/`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
