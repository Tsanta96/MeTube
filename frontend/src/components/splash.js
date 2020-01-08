import React from 'react';
import NavBarContainer from './nav/navbar_container';
import VideoIndexContainer from '../components/videos/video_index_container';
// import { Link } from 'react-router-dom';

class Splash extends React.Component {

  render() {

    return (
      <div>
        <div className="NavBar-Container">
          <NavBarContainer />
        </div>


        <section className='content-main'>
          {/* <ul className='splash-videos-container'>
            <li><a href="https://www.youtube.com/watch?v=52yPafHXTLI" className='video-thumb'>
              <img height="180" width="320" />
            </a></li>
          </ul> */}
          <VideoIndexContainer />
        </section>
      </div>
    );
  }
}

export default Splash;