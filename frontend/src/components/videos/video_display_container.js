import React from 'react'
import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import VideoDisplay from './video_display';

const mapStateToProps = (state) => ({
    video: state.entities.videos
})

const mapDispatchToProps = {
    fetchVideo: (videoId) => dispatchEvent(fetchVideo(videoId))
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDisplay);