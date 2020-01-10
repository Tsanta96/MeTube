import axios from 'axios';

export const createLike = likeData => {
    return axios.post('/api/likes', likeData)
};

export const fetchVideoLikes = videoId => {
    return axios.get(`/api/likes/videos/${videoId}`)
};

export const fetchCommentLikes = commentId => {
    return axios.get(`/api/likes/comments/${commentId}`)
};

export const fetchLike = likeId => {
    return axios.get(`/api/likes/${likeId}`)
};

export const deleteLike = likeId => {
    return axios.delete(`/api/likes/${likeId}`)
};