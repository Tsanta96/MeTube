import React from "react";
import { AuthRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

// import NavBarContainer from "./nav/navbar_container";

import Splash from "./splash"; 
import SignupFormContainer from "./session/signup_form_container";
// import ProfileContainer from "./profile/profile_container";


const App = () => (
  <div>
    {/* <Splash /> */}
    <Switch>
      <Route exact path="/" component={Splash} />
      <AuthRoute exact path="/api/users/login" component={SignupFormContainer} />
      <AuthRoute exact path="/api/users/register" component={SignupFormContainer} />

      {/* <Route exact path="/profile" component={ProfileContainer} /> */}
    </Switch>

  </div>
);

export default App;
