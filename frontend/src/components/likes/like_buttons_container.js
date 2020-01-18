import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createLike, fetchVideoLikes, fetchCommentLikes, deleteLike } from '../../actions/like_actions';
import LikeButtons from './like_buttons';

const mapStateToProps = (state, { user, video, comment }) => {
    let likes;
    let dislikes;
    if (state.entities.likes){
        likes = Object.values(state.entities.likes).filter(like => like.dislike === false);
        dislikes = Object.values(state.entities.likes).filter(like => like.dislike === true);
    } else {
        likes = 0;
        dislikes = 0;
    }
    return {
        likes, dislikes, user, video, comment
    }
};

const mapDispatchToProps = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    fetchVideoLikes: videoId => dispatch(fetchVideoLikes(videoId)),
    fetchCommentLikes: commentId => dispatch(fetchCommentLikes(commentId)),
    deleteLike: likeId => dispatch(deleteLike(likeId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikeButtons));