import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUserUploads, fetchVideos } from '../../actions/video_actions'

const mapStatetoProps = (state, ownProps) => {
  console.log(state)

  if(!state.entities.videos.data) {
  return {
    uploadedVideos: '',
    user: state.session.user, 
    }
  } else {
    return {
      user: state.session.user,
      // uploadedVideos: Object.values(state.entities.videos.data)
      uploadedVideos: state.entities.videos.data.filter((videos) => videos.user_id === state.session.user.id)
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
    // fetchUserUploads: (id) => dispatch(fetchUserUploads(id))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Profile);