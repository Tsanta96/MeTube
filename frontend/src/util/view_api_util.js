import axios from 'axios';

export const createView = videoId => {
    console.log("createView util");
    return axios.post(`/api/views/${videoId}`)
};