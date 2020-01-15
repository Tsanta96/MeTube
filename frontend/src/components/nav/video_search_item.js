import React from 'react';
import { withRouter } from 'react-router-dom';
import '../stylesheets/search.css';

const VideoSearchItem = (props) => {
      const video = props.video; 
      const user = props.user;
    
    const handleClick = () => {
        props.history.push(`/api/videos/${video._id}`);
    }

    let username; 

    if (user) {
      username = <h2 className="username"> {user.username}</h2>
    }

    
    return (
       <div className="video-main" onClick={handleClick}> 
          <video width="320" height="180">
              <source src={video.videoURL} />
          </video>
          <section className="video-info">
              <h1>{video.title}</h1>
              <h1>{username}</h1>
          </section>
       </div>
    )
  }

export default withRouter(VideoSearchItem);