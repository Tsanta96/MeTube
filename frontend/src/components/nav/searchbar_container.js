import { connect } from 'react-redux';
import { fetchSearchVideos } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actions';
import SearchBar from './searchbar';

const mapStateToProps = state => {
    let videos = Object.values(state.entities.videos)

    return({
        videos,
        users: state.entities.users,
        currentUser: state.session.user.id,
        search: state.ui.search
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchSearchVideos: (search) => dispatch(fetchSearchVideos(search)),
        fetchUsers: () => dispatch(fetchUsers())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)