import { connect } from 'react-redux';
import NavBar from './navbar';

import { logout, login } from '../actions/session_actions'; // verify session_actions
import { postVideo } from '../actions/video_actions'; // verify video actions

const mapStateToProps = (state, ownProps) => {
    
    let currentUser = state.entities.users[state.session.id]

    return {
        currentUser,
        loggedIn: state.session.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
    postVideo: (video) => dispatch(postVideo(video))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
