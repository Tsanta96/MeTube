import React from 'react'
import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideo, deleteVideo } from '../../actions/video_actions';

const mapStateToProps = (state, { video }) => ({
    video
})

const mapDispatchToProps = dispatch => ({
    fetchVideo: (video) => dispatch(fetchVideo(video)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);