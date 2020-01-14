import axios from 'axios';

export const fetchUser = userId => {
    return axios.get(`/api/users/${userId}`)
}

export const fetchUsers = () => {
    return axios.get(`/api/users`)
}

export const fetchUserProfile = userId => {
    return axios.get(`/profile/${userId}`)
}