import axios from 'axios';

export const createView = videoId => {
    return axios.post(`/api/views/${videoId}`)
};