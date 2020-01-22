import { connect } from 'react-redux';
import VideoIndexItem from './video_index_item';
import { fetchVideo, deleteVideo } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, { video }) => {
    if(!state.entities.users){
        return {}
    } else {
        return {
            video,
            user: Object.values(state.entities.users).filter(
                user => user._id === video.user_id)
        }
    }
}

const mapDispatchToProps = dispatch => ({
    fetchVideo: (video) => dispatch(fetchVideo(video)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndexItem);