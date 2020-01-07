import axios from 'axios';

export const fetchVideos = () => {
    return axios.get('/api/videos')
};

export const fetchVideo = videoId => {
    return axios.get(`/api/videos/${videoId}`)
}

export const createVideo = (videoData) => {
    return axios.post('/api/videos', videoData)
};

export const deleteVideo = videoId => {
    return axios.delete(`/api/videos/${videoId}`)
}