import customAxios from "../customAxios.js";

export const postRecipient = async (data) => {
    return await customAxios({
        method: 'post',
        url: '/recipients/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
}