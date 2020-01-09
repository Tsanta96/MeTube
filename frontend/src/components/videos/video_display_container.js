import React from 'react'
import { connect } from 'react-redux';
import { fetchVideo, fetchVideos } from '../../actions/video_actions';
import { createLike, fetchVideoLikes } from '../../actions/like_actions';
import VideoDisplay from './video_display';

const mapStateToProps = (state, ownProps) => {
    if (!state.entities.videos.data){
        return {}
    } else {
        let userId;
        if (state.session.user){
            userId = state.session.user.id;
        } else {
            userId = null;
        };
        let likes;
        let dislikes;
        if (state.entities.likes.data){
            likes = state.entities.likes.data.filter(like => like.dislike === false);
            dislikes = state.entities.likes.data.filter(like => like.dislike === true);
        } else {
            likes = 0;
            dislikes = 0;
        }
        return {
            video: state.entities.videos.data.filter((video) => video._id === ownProps.match.params.video_id)[0],
            videos: state.entities.videos.data,
            likes,
            dislikes,
            userId
        }
    }
}

const mapDispatchToProps = dispatch => ({
    fetchVideos: videos => dispatch(fetchVideos(videos)),
    createLike: like => dispatch(createLike(like)),
    fetchVideoLikes: videoId => dispatch(fetchVideoLikes(videoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoDisplay);