import React from 'react'
import { connect } from 'react-redux';
import { fetchVideo, fetchVideos } from '../../actions/video_actions';
import VideoDisplay from './video_display';

const mapStateToProps = (state, ownProps) => {
    if (!state.entities.videos.data){
        return {
            video: '',
            videos: ''
        }
    }else {
        return {
            video: state.entities.videos.data.filter((video) => video._id === ownProps.match.params.video_id)[0],
            videos: state.entities.videos.data
        }
    }
}

const mapDispatchToProps = dispatch => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    fetchVideos: videos => dispatch(fetchVideos(videos))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoDisplay);