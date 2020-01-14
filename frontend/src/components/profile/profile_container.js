import { connect } from 'react-redux';
import Profile from './profile';
import { fetchVideos } from '../../actions/video_actions';
import { fetchLikes } from '../../actions/like_actions';

const mapStatetoProps = (state, ownProps) => {
  // console.log(state)

  if(!state.entities.videos.data || !state.entities.likes.data) {
    // debugger
    return {
      user: state.session.user, 
      uploadedVideos: '',
      likedVideos: '',
    }
  } else {
    const likes = state.entities.likes.data.filter(
        likedVidIds => likedVidIds.userId === state.session.user.id)
    
    const likedVideoIds = likes.map(like => like.likeableId);

    const likedVids = state.entities.videos.data.filter(
      video => likedVideoIds.includes(video._id)
    );
      // debugger
    return {
      user: state.session.user,

      uploadedVideos: state.entities.videos.data.filter(
        videos => videos.user_id === state.session.user.id
      ),

      likedVideos: likedVids,
    };
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
    fetchLikes: () => dispatch(fetchLikes())
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Profile);