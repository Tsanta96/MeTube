import React from 'react';
import NavBarContainer from './nav/navbar_container';
import VideoIndexContainer from './videos/video_index_container';
import './stylesheets/splash.css';

class Splash extends React.Component {

  render() {

    return (
      <div>
        <div className="NavBar-Container">
          <NavBarContainer />
        </div>
        <div>
          <VideoIndexContainer />
        </div>
      </div>
    );
  }
}

export default Splash;