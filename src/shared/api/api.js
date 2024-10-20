import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://anilibria.top/api/v1'
})

// const config = {headers: {'Authorization': `Bearer ${localStorage.getItem('sn-token')}`}}

export const getUpdates = async(pageNumber) => {
    const response = await axios.get(`https://api.anilibria.tv/v3/title/updates?page=${pageNumber}&limit=6`)
    return response
}

export const getSearch = async(searchText) => {
    const response = await axios.get(`https://api.anilibria.tv/v3/title/search?search=${searchText}&limit=24`)
    return response
}

export const getTitle = async(id) => {
    const response = await axios.get(`https://api.anilibria.tv/v3/title?id=${id}`)
    return response
}

export const getFavoritesCarousel = async(page) => {
    const config = {headers: {'Authorization': `Bearer ${localStorage.getItem('sn-token')}`}}
    const response = await instance.get(`/accounts/users/me/favorites/releases?page=${page}&limit=6`, config)
    return response
}

export const getFavorites = async() => {
    const config = {headers: {'Authorization': `Bearer ${localStorage.getItem('sn-token')}`}}
    const response = await instance.get(`/accounts/users/me/favorites/releases`, config)
    return response
}

export const addFavorite = async(id) => {
    const config = {headers: {'Authorization': `Bearer ${localStorage.getItem('sn-token')}`}}
    const response = await instance.post(`/accounts/users/me/favorites`, [{release_id: Number(id)}], config)
    return response
}

export const deleteFavorite = async(id) => {
    const response = await axios.delete(`https://anilibria.top/api/v1/accounts/users/me/favorites`, {data: [{release_id: Number(id)}], headers: {'Authorization': `Bearer ${localStorage.getItem('sn-token')}`}})
    return response
}