import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';
import '../stylesheets/comment.css';

const mapStateToProps = (state, { user, videoId }) => {
    return { user, videoId }
};

const mapDispatchToProps = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);