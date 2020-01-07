import * as VideoApiUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';

export const receiveAllVideos = videos => ({
    type: RECEIVE_ALL_VIDEOS,
    videos
})
    
export const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
})

export const removeVideo = (videoId) => ({
    type: REMOVE_VIDEO,
    videoId
})

export const fetchVideos = () => dispatch => (
    VideoApiUtil.fetchVideos()
        .then(videos => dispatch(receiveAllVideos(videos)))
)

export const fetchVideo = (videoId) => dispatch => (
    VideoApiUtil.fetchVideo(videoId)
        .then((video) => dispatch(receiveVideo(video)))
)

export const createVideo = video => dispatch => (
    VideoApiUtil.createVideo(video)
    .then(video => dispatch(receiveVideo(video)))
)

export const deleteVideo = (videoId) => dispatch => (
    VideoApiUtil.deleteVideo(videoId)
        .then(() => dispatch(deleteVideo(videoId)))
)