import { connect } from 'react-redux';
import NavBar from './navbar';

import { logout, login } from '../../actions/session_actions'; // verify session_actions

const mapStateToProps = (state, ownProps) => {
    
    // let currentUser = state.entities.users[state.session.id]
    let currentUser = state.session.id

    return {
        currentUser,
        loggedIn: state.session.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
