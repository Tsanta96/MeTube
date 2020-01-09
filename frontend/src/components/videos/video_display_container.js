import React from 'react'
import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import VideoDisplay from './video_display';

const mapStateToProps = (state, ownProps) => {
    let fetchedVideo;
    // debugger
    // console.log(state)
    if (state.entities.videos !== undefined) {
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
}

const mapDispatchToProps = dispatch => {
    return {
        fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDisplay);