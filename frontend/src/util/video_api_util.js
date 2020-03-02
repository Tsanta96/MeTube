import axios from 'axios';

export const fetchVideos = () => {
    return axios.get('/api/videos')
};

export const fetchVideo = videoId => {
    return axios.get(`/api/videos/${videoId}`)
}

export const fetchTrendingVideos = timeSpan => {
    return axios.get(`/api/trending/${timeSpan}`)
};

export const createVideo = (videoData, config) => {
    return axios.post('/api/videos', videoData, config)
};

export const deleteVideo = videoId => {
    return axios.delete(`/api/videos/${videoId}`)
}

export const fetchSearchVideos = search => {
    return axios.get(`/api/search/${search}`)
}  
export const getUserUploads = id => {
    return axios.get(`/api/user/${id}/`)
}