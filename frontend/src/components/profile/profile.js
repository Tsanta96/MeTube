import React from 'react';
import VideoIndexItemContainer from '../videos/video_index_item_container';
import '../stylesheets/splash.css';
import '../stylesheets/profile.css';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.uploadedVideosRender = this.uploadedVideosRender.bind(this);
  }

  componentDidMount(){
    this.props.fetchVideos();
  }

  uploadedVideosRender() {
    if (Object.keys(this.props.uploadedVideos).length > 0) {
      return (
        <ul className>
          {this.props.uploadedVideos.map(video =>
            <li>
              <VideoIndexItemContainer key={video._id} video={video} />
            </li>
          )}
        </ul>
      )
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }

  render(){

    console.log(this.props)

    const { user } = this.props;

      return (
        <div className='profile-main-cont'>
          <div className = 'username-cont'>
            <i className="fas fa-camera-retro"></i>{user.username}
          </div>

          <label className='uploaded-label'>
            Uploads
            <i className="fas fa-chevron-circle-right"></i>
          </label>

          <div className ='uploaded-video-cont'>
            {this.uploadedVideosRender()}
          </div>
          {/* <div className='border-bottom'></div> */}

          <div className='liked-videos-cont'>

          </div>
          
        </div>
      )
  }

}

export default Profile;