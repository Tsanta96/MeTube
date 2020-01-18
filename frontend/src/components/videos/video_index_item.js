import React from 'react';
import '../stylesheets/splash.css';
import { withRouter } from 'react-router-dom';

class VideoIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.handleVideoClick = this.handleVideoClick.bind(this);
    }

    handleVideoClick(videoId){
        // e.preventDefault();
        // this.props.fetchVideo(videoId);
        this.props.history.push(`/api/videos/${videoId}`); //remove "api"
    }

    componentDidMount(){
        this.props.fetchVideo(this.props.video);
        this.props.fetchUsers();
    }

    render() {
      const {video, user} = this.props;
      if(!user) return null;
        return (
          <div>
            <button className='video-thumb-button' onClick={() => this.handleVideoClick(video._id)}>
              <video>
                <source src={video.videoURL}></source>
              </video>
            </button>
            <div className="video-thumb-title-container">
              <i className="fas fa-poo"></i>
              <h1 className="video-thumb-title">{video.title}</h1>
            </div>
            <div className='video-thumb-detail'>
              {/* works for every pages except for splash! */}
              {/* <p>{user[0].username}</p>  */}
            </div>
          </div>
        );
    }
}

export default withRouter(VideoIndexItem);

