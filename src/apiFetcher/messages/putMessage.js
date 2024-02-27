import customAxios from "../customAxios.js";

export const putMessage = async(data, id) => {
    return await customAxios({
        method: 'put',
        url: `/messages/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            charset: 'utf-8'
        },
        data: data
    })
}