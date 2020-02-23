import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos, fetchTrendingVideos } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  if(!state.entities.videos || !state.entities.users) {
      return {}
  } else {
    let videos = Object.values(state.entities.videos);
    let users = Object.values(state.entities.users);
    
    let trending = Object.values(state.entities.videos)
      .filter(video => video.views.length)
      .sort(function(a, b){
        return a - b
      })
    return {
        videos,
        trending,
        users
    }
  }
}

const mapDispatchToProps = dispatch => ({
    fetchVideos: (videos) => dispatch(fetchVideos(videos)),
    fetchTrendingVideos: (timespan) => dispatch(fetchTrendingVideos(timespan)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);