import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = (state) => {
  // if(!state.entities.videos || !state.entities.users) {
  //     return {}
  // } else {
    // let usersArr = Object.values(state.entities.users);
    let videos = Object.values(state.entities.videos);

    // let users = [];
    // videos.forEach(video => {
    //   usersArr.forEach(user => {
    //     if(video.user_id === user._id){
    //       users.push({...video, ...user})
    //     }
    //   })
    // })
    return {
        videos,
        // users
        
    }
  }
// }

const mapDispatchToProps = dispatch => ({
    fetchVideos: (videos) => dispatch(fetchVideos(videos))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);