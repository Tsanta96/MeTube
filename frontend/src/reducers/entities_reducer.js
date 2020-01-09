import { combineReducers } from 'redux';
import VideosReducer from './videos_reducer';
import LikesReducer from './likes_reducer';

export default combineReducers({
    videos: VideosReducer,
    likes: LikesReducer
});