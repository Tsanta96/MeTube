import { connect } from 'react-redux';
import { fetchSearchVideos } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/users_actions';
import SearchBar from './searchbar';

const mapStateToProps = state => {
    let videos = Object.values(state.entities.videos)

    return({
        videos
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchSearchVideos: (search) => dispatch(fetchSearchVideos(search))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)