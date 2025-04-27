import { apiInstance } from "../base"

const BASE_URL = 'title/updates?limit=24'

export const getUpdatesTitlesList = () => {
    return apiInstance.get(`${BASE_URL}`)
}