import { connect } from 'react-redux';
import { createLike, fetchCommentLikes, deleteLike } from '../../actions/like_actions';
import Comment from './comment';

const mapStateToProps = (state, { comment, user }) => {
    let likes;
    let dislikes;
    if (state.entities.likes){
        likes = Object.values(state.entities.likes).filter(like => like.dislike === false);
        dislikes = Object.values(state.entities.likes).filter(like => like.dislike === true);
    } else {
        likes = 0;
        dislikes = 0;
    };
    return { comment, user, likes, dislikes };
};

const mapDispatchToProps = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    fetchCommentLikes: commentId => dispatch(fetchCommentLikes(commentId)),
    deleteLike: likeId => dispatch(deleteLike(likeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);