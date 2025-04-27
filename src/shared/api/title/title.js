import { apiInstance } from "../base"

const BASE_URL = 'title'

export const getTitle = (id) => {
    return apiInstance.get(`${BASE_URL}?id=${id}`)
}