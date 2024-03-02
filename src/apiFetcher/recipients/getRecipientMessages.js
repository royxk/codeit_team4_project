import customAxios from '../customAxios.js';

export const getRecipientMessages = async (recipientId, limit = 8, offset = 0) => {
  return await customAxios({
    method: 'get',
    url: `/recipients/${recipientId}/messages/?limit=${limit}&offset=${offset}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
