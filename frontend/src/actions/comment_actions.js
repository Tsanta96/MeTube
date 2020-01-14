import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_VIDEO_COMMENTS = "RECEIVE_VIDEO_COMMENTS";

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const receiveVideoComments = comments => ({
    type: RECEIVE_VIDEO_COMMENTS,
    comments
});

export const fetchVideoComments = videoId => dispatch => (
    CommentApiUtil.fetchVideoComments(videoId)
        .then(comments => dispatch(receiveVideoComments(comments)))
);

export const createComment = comment => dispatch => (
    CommentApiUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
);