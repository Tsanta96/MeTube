import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import { createLike, fetchVideoLikes, deleteLike } from '../../actions/like_actions';
import { fetchVideoComments } from '../../actions/comment_actions';
import VideoDisplay from './video_display';

const mapStateToProps = (state, ownProps) => {
    if (!state.entities.videos.data){
        return {}
    } else {
        let likes;
        let dislikes;
        if (state.entities.likes.data){
            likes = state.entities.likes.data.filter(like => like.dislike === false);
            dislikes = state.entities.likes.data.filter(like => like.dislike === true);
        } else {
            likes = 0;
            dislikes = 0;
        }

        let comments;
        if (Object.keys(state.entities.comments).length > 0){
            comments = Object.values(state.entities.comments).reverse();
        } else {
            comments = null;
        };
        return {
            video: state.entities.videos.data.filter((video) => video._id === ownProps.match.params.video_id)[0],
            videos: state.entities.videos.data,
            likes,
            dislikes,
            user: state.session.user,
            comments
        }
    }
}

const mapDispatchToProps = dispatch => ({
    fetchVideos: videos => dispatch(fetchVideos(videos)),
    createLike: like => dispatch(createLike(like)),
    fetchVideoLikes: videoId => dispatch(fetchVideoLikes(videoId)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchVideoComments: videoId => dispatch(fetchVideoComments(videoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoDisplay);