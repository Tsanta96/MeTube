import React from 'react';
import NavBarContainer from './nav/navbar_container';
import VideoIndexContainer from './videos/video_index_container';
import './stylesheets/splash.css';

// import { Switch, Route, Redirect } from 'react-router-dom';
// import { ProtectedRoute } from '../util/route_util';

// import ProfileContainer from "./profile/profile_container";
// import VideoDisplayContainer from "./videos/video_display_container";
// import VideoUploadContainer from "./videos/video_upload_container";
// import SearchBarContainer from "./nav/searchbar_container";

class Splash extends React.Component {

  render() {

    return (
      <div>

        <div className="navBar-Container">
          <NavBarContainer />
        </div>

        <VideoIndexContainer />

        {/* <Switch>
          <Route path="/api/search" component={SearchBarContainer} />
          <Route path="/api/videos/:video_id" component={VideoDisplayContainer} />
          <Route path="/api/upload" component={VideoUploadContainer} />
          <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        </Switch> */}

      </div>
    );
  }
}

export default Splash;