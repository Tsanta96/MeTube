import { RECEIVE_LIKE, RECEIVE_VIDEO_LIKES, RECEIVE_COMMENT_LIKES } from '../actions/like_actions';

const LikesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_LIKE:
            return Object.assign({}, state, {[action.like.id]: action.like})
        case RECEIVE_VIDEO_LIKES:
            return Object.assign({}, state, action.likes)
        case RECEIVE_COMMENT_LIKES:
            return Object.assign({}, state, action.likes)
        default:
            return state;
    }
};

export default LikesReducer;