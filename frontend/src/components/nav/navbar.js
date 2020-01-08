import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../stylesheets/navbar.css'

class NavBar extends React.Component {

    constructor(props){
        super(props)

      this.logoutUser = this.logoutUser.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
    }
  
    logoutUser(e) {
      e.preventDefault();
      if (this.props.currentUser) {
        this.props.logout()
      } else {
        this.props.history.push('/')
      }
    }

    handleUpload(e){
        e.preventDefault()
        this.props.history.push("/") // should be /videos??
    }

    renderSessionButton() {
      if (this.props.loggedIn) {
        return (
          <div>
            <button className='signOut-button' onClick={this.logoutUser}>Sign Out</button>
          </div>
        )
      } else {
        return (
          <div className="signin-button-container">
            <Link to="/api/users/login" className="session-button">
              <i className="fas fa-user-circle"></i> Sign In
            </Link>
            <Link to="/api/users/register" className="session-button">
              <i class="fas fa-user-plus"></i> Sign Up
            </Link>
          </div>
        );
      }
    }

    render() {
      return (
        <div className="main">
          <i className="fas fa-bars"></i>

          <i class="fab fa-youtube-square"></i>
          {/* <i className="fab fa-youtube fa-youtube-nav"></i> */}
          <p className="youTube-logo-text">MeTube</p>

          <input type="text" className="searchbar" placeholder="Search" />
          <i className="fas fa-search"></i>

          <i className="fas fa-video" onClick={this.handleUpload}></i>
          {this.renderSessionButton()}
        </div>
      );
    }

}


export default withRouter(NavBar);