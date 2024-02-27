import customAxios from "../customAxios.js";

export const postRecipientMessage = async (data, recipientId) => {
    return await customAxios({
        method: 'post',
        url: `/recipients/${recipientId}/messages/`,
        headers: {
            'Content-Type': 'application/json',
            charset: 'utf-8'
        },
        data: data
    })
}