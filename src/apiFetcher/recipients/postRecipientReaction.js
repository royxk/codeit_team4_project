import customAxios from "../customAxios.js";

export const postRecipientReaction = async(data, recipientId) => {
    return await customAxios({
        method: 'post',
        url: `/recipients/${recipientId}/reactions/`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    })
}