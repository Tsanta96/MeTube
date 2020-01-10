import axios from 'axios';

export const createComment = commentData => {
    return axios.post('/api/comments', commentData)
};

export const fetchVideoComments = videoId => {
    return axios.get(`/api/comments/videos/${videoId}`)
};