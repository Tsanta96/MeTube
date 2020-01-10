import { connect } from 'react-redux';
import Profile from './profile';
import { fetchVideos } from '../../actions/video_actions'

const mapStatetoProps = (state, ownProps) => {
  console.log(state)

  if(!state.entities.videos.data) {
    return {
      user: state.session.user, 
      uploadedVideos: '',
      
    }
  } else {
    return {
      user: state.session.user,
      uploadedVideos: state.entities.videos.data.filter((videos) => videos.user_id === state.session.user.id)
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Profile);