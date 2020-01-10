import { RECEIVE_COMMENT, RECEIVE_VIDEO_COMMENTS } from '../actions/comment_actions';

const CommentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_COMMENT:
            return Object.assign({}, state, {[state.length]: action.comment.data})
        case RECEIVE_VIDEO_COMMENTS:
            return action.comments.data
        default:
            return state;
    }
};

export default CommentsReducer;