import { combineReducers } from 'redux';
import VideosReducer from './videos_reducer';
import LikesReducer from './likes_reducer';
import UsersReducer from './users_reducer';
import CommentsReducer from './comments_reducer';

export default combineReducers({
    videos: VideosReducer,
    users: UsersReducer,
    likes: LikesReducer,
    comments: CommentsReducer
})