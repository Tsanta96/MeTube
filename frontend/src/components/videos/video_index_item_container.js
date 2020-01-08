import { connect } from 'react-redux';
import VideoIndexItem from './video_index_item';
import { fetchVideo, deleteVideo } from '../../actions/video_actions';

const mapStateToProps = (state, { video }) => {
<<<<<<< HEAD
=======
    // console.log(state)
>>>>>>> 754a956d73a037893d331bc44003947d05b15246
    return {
        video
    }
}

const mapDispatchToProps = dispatch => ({
    fetchVideo: (video) => dispatch(fetchVideo(video)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndexItem);