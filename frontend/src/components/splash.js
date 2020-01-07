import React from 'react';
import NavBarContainer from './nav/navbar_container';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

  render() {

    return (
      <div>
        <div className="NavBar-Container">
          <NavBarContainer />
        </div>
        <section>
          {/* video index  */}
          <Link to="/api/users/login">Log In</Link>
          <br />
          <Link to="/api/users/register">Sign Up</Link>
        </section>

        <section>
          <a href="https://www.youtube.com/watch?v=52yPafHXTLI">
            <img height="180" width="320" />
          </a>
        </section>
      </div>
    );
  }
}

export default Splash;