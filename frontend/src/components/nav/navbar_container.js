import { connect } from 'react-redux';
import NavBar from './navbar';

import { logout } from '../../actions/session_actions'; // verify session_actions

const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    let currentUser = state.session.user.id
      return {
          currentUser,
          loggedIn: state.session.isAuthenticated
      }

}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
