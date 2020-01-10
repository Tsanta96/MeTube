import { RECEIVE_LIKE, RECEIVE_VIDEO_LIKES, RECEIVE_COMMENT_LIKES, REMOVE_LIKE } from '../actions/like_actions';

const LikesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_LIKE:
            return Object.assign({}, state, {[action.like.id]: action.like})
        case RECEIVE_VIDEO_LIKES:
            return Object.assign({}, state, action.likes)
        case RECEIVE_COMMENT_LIKES:
            return Object.assign({}, state, action.likes)
        case REMOVE_LIKE:
            let newState = Object.assign({}, state);
            delete newState[action.likeId];
            return newState;
        default:
            return state;
    }
};

export default LikesReducer;