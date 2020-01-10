import React from 'react';
import VideoIndexItemContainer from '../videos/video_index_item_container';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.uploadedVideosRender = this.uploadedVideosRender.bind(this);
  }

  componentDidMount(){
    this.props.fetchVideos();
    // this.props.fetchUserUploads(this.props.user.id);
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
        <p>Loading...</p>
      )
    }
  }

  render(){

    console.log(this.props)

    const { user } = this.props;

      return (
        <div>
          <div>
            {user.username}
          </div>

            <label>Uploads</label>
          <div>
            {this.uploadedVideosRender()}
          </div>
          
        </div>
      )
  }

}

export default Profile;