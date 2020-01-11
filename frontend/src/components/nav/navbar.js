import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../stylesheets/navbar.css'

class NavBar extends React.Component {

    constructor(props){
        super(props)
      
      this.state = {search: this.props.search ? this.props.search : '' }
      this.search = this.search.bind(this)
      this.logoutUser = this.logoutUser.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
      this.renderSplash = this.renderSplash.bind(this);
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

    search(e) {
      e.preventDefault();
      this.props.fetchSearchVideos(this.state)
      this.props.history.push('/search')
    }

    updateField(field) {
      return e => {
        this.setState({[field]: e.target.value});
        this.props.updateSearchField(e.target.value);
      }
    }

    renderSplash(e){
      e.preventDefault();
      this.props.history.push("/")
    }

    renderSessionButton() {
      if (this.props.loggedIn) {
        return (
          <div>
            <button className="signOut-button" onClick={this.logoutUser}>
            <i className="fas fa-sign-out-alt"></i>
              Sign Out
            </button>
          </div>
        );
      } else {
        return (
          <div className="signin-button-container">
            <Link to="/api/users/login" className="session-button">
              <i className="fas fa-user-circle"></i> Sign In
            </Link>
            <Link to="/api/users/register" className="session-button">
              <i className="fas fa-user-plus"></i> Sign Up
            </Link>
          </div>
        );
      }
    }

    render() {
      console.log(this.props)

      if (this.props.location.pathname === '/api/users/login' || this.props.location.pathname === '/api/users/register') {
        return (
          <div className='hidden'></div>
        )
      } else {

      return (
        <div className="main">
          <i className="fas fa-bars"></i>

          <i className="fab fa-youtube-square">{this.renderSplash}</i>
          <p className="youTube-logo-text">MeTube</p>


          <input type="text" className="searchbar" placeholder="Search" onChange={this.updateField('search')} />
          <i className="fas fa-search" onClick={this.search}></i>

          <i className="fas fa-video" onClick={this.handleUpload}></i>
          {this.renderSessionButton()}

        </div>
      );
    }
  }

}


export default withRouter(NavBar);