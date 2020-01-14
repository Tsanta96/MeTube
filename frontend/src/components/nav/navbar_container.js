import { connect } from 'react-redux';
import NavBar from './navbar';

import { logout } from '../../actions/session_actions'; // verify session_actions
import {fetchSearchVideos} from '../../actions/video_actions';
import {updateSearchField} from '../../actions/ui_actions';


const mapStateToProps = (state, ownProps) => {
    let currentUser = state.session.user.id
      return {
          currentUser,
          loggedIn: state.session.isAuthenticated,
          videos: state.entities.videos,
          search: state.ui.search
      }

}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchSearchVideos: (search) => dispatch(fetchSearchVideos(search)),
    updateSearchField: (search) => dispatch(updateSearchField(search))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
