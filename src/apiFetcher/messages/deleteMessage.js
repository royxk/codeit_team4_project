import customAxios from "../customAxios.js";

export const deleteMessage = async(id) => {
    return await customAxios({
        method: 'delete',
        url: `/messages/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            charset: 'utf-8'
        },
    })
}