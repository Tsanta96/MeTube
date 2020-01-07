import { connect } from 'react-redux';

const mapStateToProps = state => {
    let videos = Object.values(state.entities.videos)

    return({
        videos
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchVideos: () => dispatch(fetchVideos())
    })
}