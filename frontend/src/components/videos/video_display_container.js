import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchVideos } from '../../actions/video_actions';
import { createLike, fetchVideoLikes, deleteLike } from '../../actions/like_actions';
import { fetchVideoComments } from '../../actions/comment_actions';
import { fetchSubscriptions, createSubscription, deleteSubscription } from '../../actions/subscription_actions';
import { incrementViewCount } from '../../actions/view_actions';
import VideoDisplay from './video_display';


const mapStateToProps = (state, ownProps) => {
    if (!state.entities.videos){
        return {}
    } else {
        let likes;
        let dislikes;
        if (state.entities.likes){
            likes = Object.values(state.entities.likes).filter(like => like.dislike === false);
            dislikes = Object.values(state.entities.likes).filter(like => like.dislike === true);
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
            video: Object.values(state.entities.videos).filter((video) => video._id === ownProps.match.params.video_id)[0],
            videos: state.entities.videos,
            likes,
            dislikes,
            user: state.session.user,
            comments,
            subscriptions: Object.values(state.entities.subscriptions)
        }
        
    }
}

const mapDispatchToProps = dispatch => ({
    fetchVideos: videos => dispatch(fetchVideos(videos)),
    createLike: like => dispatch(createLike(like)),
    fetchVideoLikes: videoId => dispatch(fetchVideoLikes(videoId)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchVideoComments: videoId => dispatch(fetchVideoComments(videoId)),
    createSubscription: data => dispatch(createSubscription(data)),
    deleteSubscription: subId => dispatch(deleteSubscription(subId)),
    fetchSubscriptions: () => dispatch(fetchSubscriptions()),
    incrementViewCount: videoId => dispatch(incrementViewCount(videoId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoDisplay));