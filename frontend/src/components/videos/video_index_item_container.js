import { connect } from 'react-redux';
import VideoIndexItem from './video_index_item';
import { fetchVideo, deleteVideo } from '../../actions/video_actions';

const mapStateToProps = (state, { video }) => {
    // console.log(state)
    return {
        video
    }
}

const mapDispatchToProps = dispatch => ({
    fetchVideo: (video) => dispatch(fetchVideo(video)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndexItem);