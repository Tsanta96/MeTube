import React from 'react'
import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import VideoUpload from './video_upload';

const mapStateToProps = (state, { show, hideModal } ) => ({
    currentUser: state.session.user,
    show,
    hideModal
})

const mapDispatchToProps = dispatch => ({
    createVideo: (video) => dispatch(createVideo(video))
})


export default connect(mapStateToProps, mapDispatchToProps)(VideoUpload);