import customAxios from "../customAxios.js";

export const getAllRecipients = async () => {
    return await customAxios({
        method: 'get',
        url: '/recipients/',
        headers: {
            'Content-Type': 'application/json',
            charset: 'utf-8'
        }
    })
}

export const getRecipient = async(id) => {
    return await customAxios({
        method: 'get',
        url: `/recipients/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            charset: 'utf-8'
        }
    })
}
