import React from 'react'
import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import VideoDisplay from './video_display';

const mapStateToProps = (state, ownProps) => {
    let fetchedVideo;
    let videosArr = state.entities.videos;
    videosArr.data.forEach((video) => {
        if (video._id === ownProps.match.params.video_id) {
            fetchedVideo = video;
        }
    })
    return {
        video: fetchedVideo,
        videos: state.entities.videos.data
    }
}

const mapDispatchToProps = {
    fetchVideo: (videoId) => dispatchEvent(fetchVideo(videoId))
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDisplay);