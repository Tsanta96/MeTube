import { connect } from 'react-redux'
import { fetchTrendingVideos } from '../../actions/video_actions';
import TrendingVideos from './trending_videos';

const mapStateToProps = (state) => ({
    videos: Object.values(state.entities.videos)
})

const mapDispatchToProps = dispatch => ({
    fetchTrendingVideos: (timeSpan) => dispatch(fetchTrendingVideos(timeSpan))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrendingVideos);


