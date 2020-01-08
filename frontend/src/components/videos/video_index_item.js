import React from 'react';
import '../stylesheets/splash.css';
import { withRouter } from 'react-router-dom';

class VideoIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.handleVideoClick = this.handleVideoClick.bind(this);
    }

    handleVideoClick(videoId){
<<<<<<< HEAD
=======
        // debugger
>>>>>>> 754a956d73a037893d331bc44003947d05b15246
        // e.preventDefault();
        this.props.fetchVideo(videoId);
        this.props.history.push(`/api/videos/${videoId}`);
    }

    componentDidMount(){
        this.props.fetchVideo(this.props.video);
    }

    render() {
<<<<<<< HEAD
=======
        // debugger;
        console.log(this.props)
>>>>>>> 754a956d73a037893d331bc44003947d05b15246
        const video = this.props.video;
        return (
          <div>
            <button className='video-thumb-button' onClick={() => this.handleVideoClick(video._id)}>
              <video controls>
                <source src={video.videoURL}></source>
              </video>
            </button>
            <div className="video-thumb-title-container">
              <i className="fas fa-poo"></i>
              <h1 className="video-thumb-title">{video.title}</h1>
            </div>
            <div>
<<<<<<< HEAD
                <button onClick={() => this.handleVideoClick(video._id)}><video height="180" width="320">
                    <source src={video.videoURL}></source>
                </video></button>
                <h1 className='video-thumb-title'>{video.title}</h1>
                <p>{video.user_id}</p>
=======
              <p>User ID: {video.user_id}</p>
>>>>>>> 754a956d73a037893d331bc44003947d05b15246
            </div>
          </div>
        );
    }
}

export default withRouter(VideoIndexItem);

