import {
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEO,
  RECEIVE_SEARCH_VIDEOS,
  REMOVE_VIDEO,
  RECEIVE_USER_UPLOADS,
  RECEIVE_TRENDING_VIDEOS
} from "../actions/video_actions";

const VideosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      //   debugger;
      return Object.assign({}, state, action.videos.data);
    case RECEIVE_VIDEO:
      return Object.assign({}, state, { [action.video.id]: action.video.data });
    case RECEIVE_USER_UPLOADS:
      return Object.assign({}, state, { [state.user]: action.videos.data });
    case REMOVE_VIDEO:
      let newState = Object.assign({}, state);
      delete newState[action.videoId];
      return newState;
    case RECEIVE_SEARCH_VIDEOS:
      //   debugger;
      return Object.assign({}, action.videos.data);
    case RECEIVE_TRENDING_VIDEOS:
      return Object.assign({}, action.videos.data);
    default:
      return state;
  }
};

export default VideosReducer;
