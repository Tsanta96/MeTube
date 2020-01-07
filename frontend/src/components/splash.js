import React from 'react';
import NavBarContainer from './nav/navbar_container';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

  render() {

    return (
      <div>
        <div className='NavBar-Container'>
          <NavBarContainer />
        </div>
        <section>
          {/* video index  */}
          <Link to='/api/users/login' >Log In</Link>
          <Link to='/api/users/register'>Sign Up</Link>
          -----------TEST!!!!!!----------
        </section>

        <section>
          <img height='' width='' />
        </section>
      </div>
    )
  }
}

export default Splash;