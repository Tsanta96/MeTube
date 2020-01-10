import React from 'react';
import { withRouter } from 'react-router-dom';

const VideoSearchItem = (props) => {
      const video = props.video; 
      const user = props.user;
    
    const handleClick = () => {
       props.history.push(`/videos/${video.id}`)
    }

    let username; 

    if (user) {
      username = <h2 className="username"> {user.username}</h2>
    }

    return (

       <div className="main" onClick={handleClick}> 
                <video width="250" heigth="140">
                   <source src={video.videoUrl} />
                 
                </video>
                <section className="video-info">
                    <h1>{video.title}</h1>
                    <p>Views</p>
                    <p>Description</p>
                </section>
       </div>

    )

  }


export default withRouter(VideoSearchItem);