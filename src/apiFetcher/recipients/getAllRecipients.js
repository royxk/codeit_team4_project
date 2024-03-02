import customAxios from "../customAxios.js";

export const getAllRecipients = async (limit = 8, offset = 0) => {
  return await customAxios({
    method: "get",
    url: `/recipients/?limit=${limit}&offset=${offset}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getRecipient = async (id) => {
  return await customAxios({
    method: "get",
    url: `/recipients/${id}/`,
    headers: {
      "Content-Type": "application/json"
    },
  });
};
