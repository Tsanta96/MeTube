import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const RECEIVE_VIDEO_LIKES = "RECEIVE_VIDEO_LIKES";
export const RECEIVE_COMMENT_LIKES = "RECEIVE_COMMENT_LIKES";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

export const receiveVideoLikes = likes => ({
    type: RECEIVE_VIDEO_LIKES,
    likes
});

export const receiveCommentLikes = likes => ({
    type: RECEIVE_COMMENT_LIKES,
    likes
});

export const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
})

export const fetchLike = likeId => dispatch => (
    LikeApiUtil.fetchLike(likeId)
        .then(like => dispatch(receiveLike(like)))
);

export const fetchVideoLikes = videoId => dispatch => {
    return LikeApiUtil.fetchVideoLikes(videoId)
        .then(likes => dispatch(receiveVideoLikes(likes)))
};

export const fetchCommentLikes = commentId => dispatch => (
    LikeApiUtil.fetchCommentLikes(commentId)
        .then(likes => dispatch(receiveCommentLikes(likes)))
);

export const createLike = like => dispatch => {
    return LikeApiUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
};

export const deleteLike = likeId => dispatch => (
    LikeApiUtil.deleteLike(likeId).then(() => dispatch(removeLike(likeId)))
);