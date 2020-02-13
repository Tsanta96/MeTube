import { connect } from 'react-redux';
import Profile from './profile';
import { fetchVideos } from '../../actions/video_actions';
import { fetchLikes } from '../../actions/like_actions';
import { fetchUsers, fetchUserProfile } from '../../actions/user_actions';

const mapStatetoProps = (state, ownProps) => {
  
  if(!state.entities.videos || !state.entities.likes ||!state.entities.users ) {
    return {
      user: state.session.user, 
      uploadedVideos: '',
      likedVideos: '',
    }
  } else {
    const likes = Object.values(state.entities.likes).filter(
      likedVidIds => likedVidIds.userId === state.session.user.id)
      
      const likedVideoIds = likes.map(like => like.likeableId)
      
      const likedVids = Object.values(state.entities.videos).filter(
        video => likedVideoIds.includes(video._id))
        
      const allUsersIds = Object.values(state.entities.users).map(userId => userId._id)
      const currentUserId = allUsersIds.filter(userId => userId === state.session.user.id)
    return {
      user: state.session.user, 
      userId: currentUserId,

      uploadedVideos: Object.values(state.entities.videos).filter(
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