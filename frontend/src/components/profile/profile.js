import React from 'react';
import VideoIndexItemContainer from '../videos/video_index_item_container';
import '../stylesheets/splash.css';
import '../stylesheets/profile.css';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.likedVideosRender = this.likedVideosRender.bind(this);
    this.uploadedVideosRender = this.uploadedVideosRender.bind(this);
  }

  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchVideos();
    this.props.fetchLikes();
  }

  likedVideosRender(){
    // console.log(this.props.likedVideos)
    // debugger
    if (Object.keys(this.props.likedVideos).length > 0) {
      return (
        <ul>
          {this.props.likedVideos.map(video => 
            <li>
              <VideoIndexItemContainer key={video._id} video={video} />
            </li>
          )}
        </ul>
      )
    } else {
      return (
        <p>Loading Liked Videos...</p>
      )
    }
  }

  uploadedVideosRender() {
    if (Object.keys(this.props.uploadedVideos).length > 0) {
      return (
        <ul>
          {this.props.uploadedVideos.map(video =>
            <li>
              <VideoIndexItemContainer key={video._id} video={video} />
            </li>
          )}
        </ul>
      )
    } else {
      return (
        <p>Loading Uploaded Videos...</p>
      )
    }
  }

  render(){
    console.log(this.props)
    // console.log(this.props.likeVideos)

    const { user } = this.props;

      return (
        <div className="profile-main-cont">

          <div className="username-cont">
            <i className="fas fa-camera-retro"></i>
            {user.username}
          </div>

          <label className="uploaded-label">
            Uploads
            <i className="fas fa-chevron-circle-right"></i>
          </label>

          <div className="uploaded-video-cont">{this.uploadedVideosRender()}</div>

          <label className="uploaded-label">
            Liked Videos
            <i className="fas fa-chevron-circle-right"></i>
          </label>

          <div className="liked-videos-cont">{this.likedVideosRender()}</div>

          <div className='some-other-cont'>

          </div>

        </div>
      );
  }

}

export default Profile;