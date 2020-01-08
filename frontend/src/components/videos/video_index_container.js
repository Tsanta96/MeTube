import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = (state) => {
    // console.log(state);
    return {
    videos: state.entities.videos.data
    }
}

const mapDispatchToProps = dispatch => ({
    fetchVideos: (videos) => dispatch(fetchVideos(videos))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);