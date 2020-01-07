import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import './navbar.css'

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
          <div className="top-nav-signup-button">
            <button onClick={this.logoutUser}>Sign Out</button>
          </div>
        )
      } else {
        return (
          <div className='signin-button-container'>
            <i className="fas fa-user-circle"></i>
            <Link to='/api/users/login' className='signin-button'>Sign In</Link>
          </div>
        )
      }
    }

    render() {
      console.log(this.props)
      return (
        <div className="main">
          <i className="fas fa-bars"></i>
          <div className="left">
            <i className="fab fa-youtube"></i>
            YouTube
          </div>

          <div className="center">
            {/* Search bar will be here */}
            <input type='text' className='searchbar' placeholder='Search' />
            <i className="fas fa-search"></i>
          </div>

          <div className="right">
            <i className="fas fa-video" onClick={this.handleUpload}></i>
            {this.renderSessionButton()}
            {/* <button onClick={this.renderSessionButton}>Sign Out</button> */}
          </div>
        </div>
      );
    }

}


export default withRouter(NavBar);