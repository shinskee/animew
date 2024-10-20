import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://anilibria.top/api/v1',
 })

// const config = {headers: {'Authorization': `Bearer ${localStorage.getItem('sn-token')}`}}

export const getLogin = async() => {
    const response = await axios.get(`https://anilibria.top/api/v1/accounts/users/auth/social/google/login?host=https:%2F%2Fanilibria.top`)
    return response
}

export const getAuth = async(state) => {
    const response = await instance.get(`/accounts/users/auth/social/authenticate?state=${state}`)
    return response
}

export const getMe = async() => {
    const config = {headers: {'Authorization': `Bearer ${localStorage.getItem('sn-token')}`}}
    const response = await instance.get(`/accounts/users/me/profile`, config)
    return response
}
