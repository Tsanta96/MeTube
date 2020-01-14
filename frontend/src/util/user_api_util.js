import axios from 'axios';

export const fetchUser = userId => {
    return axios.get(`http://localhost:5000/api/users/${userId}`)
}

export const fetchUsers = () => {
    return axios.get(`http://localhost:5000/api/users`)
}