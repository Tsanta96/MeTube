import * as ViewApiUtil from '../util/view_api_util';
import { fetchVideos } from '../actions/video_actions';

export const incrementViewCount = videoId => dispatch => {
    return ViewApiUtil.createView(videoId)
        .then(() => dispatch(fetchVideos())
)}