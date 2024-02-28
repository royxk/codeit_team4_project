import customAxios from "../customAxios.js";

export const getRecipientReaction = async(recipientId, limit = 8, offset = 0) => {
    return await customAxios({
        method: 'get',
        url: `/recipients/${recipientId}/reactions/?limit=${limit}&offset=${offset}`,
        headers: {
            'Content-Type': 'application/json',
            charset: 'utf-8'
        },
    })
}