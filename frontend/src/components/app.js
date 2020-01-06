import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import NavBarContainer from "./nav/navbar_container";

import Splash from "./splash";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./profile/profile_container";


const App = () => (
  <div>
    <Splash />
    <Switch>
      <AuthRoute exact path="/videos" component={Splash} />
      <AuthRoute exact path="/api/users/login" component={LoginFormContainer} />
      <AuthRoute exact path="/api/users/register" component={SignupFormContainer} />

      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;
