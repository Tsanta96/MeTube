import { connect } from 'react-redux';
import Profile from './profile';
import { fetchVideos } from '../../actions/video_actions';
import { fetchLikes } from '../../actions/like_actions';
import { fetchUsers, fetchUserProfile } from '../../actions/user_actions';

const mapStatetoProps = (state, ownProps) => {
  
  if(!state.entities.videos.data || !state.entities.likes.data ||!state.entities.users.data ) {
    return {
      user: state.session.user, 
      uploadedVideos: '',
      likedVideos: '',
    }
  } else {
    const likes = state.entities.likes.data.filter(
      likedVidIds => likedVidIds.userId === state.session.user.id)
      
      const likedVideoIds = likes.map(like => like.likeableId)
      
      const likedVids = state.entities.videos.data.filter(
        video => likedVideoIds.includes(video._id))
        
      const allUsersIds = state.entities.users.data.map(userId => userId._id)
      const currentUserId = allUsersIds.filter(userId => userId === state.session.user.id)
    return {
      user: state.session.user, 
      userId: currentUserId,

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
    fetchLikes: () => dispatch(fetchLikes()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUserProfile: id => dispatch(fetchUserProfile(id))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Profile);