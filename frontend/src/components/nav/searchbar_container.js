import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import SearchBar from './searchbar';

const mapStateToProps = state => {
    let videos = Object.values(state.entities.videos)

    return({
        videos
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchVideos: () => dispatch(fetchVideos())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)