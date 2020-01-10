import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

// import NavBarContainer from "./nav/navbar_container";

import Splash from "./splash"; 
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./profile/profile_container";
import VideoDisplayContainer from "./videos/video_display_container";
import VideoUploadContainer from "./videos/video_upload_container";
import SearchBarContainer from "./nav/searchbar_container";


const App = () => (
  <div>
    {/* <Splash /> */}
    <Switch>
      <Route exact path="/" component={Splash} />
      <AuthRoute exact path="/api/users/login" component={SignupFormContainer} />
      <AuthRoute exact path="/api/users/register" component={SignupFormContainer} />
      <Route path="/api/search" component={SearchBarContainer} />
      <Route path="/api/videos/:video_id" component={VideoDisplayContainer} />
      {/* <Route exact path="/profile" component={ProfileContainer} /> */}
      <Route path="/api/upload" component={VideoUploadContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    </Switch>

  </div>
);

export default App;
