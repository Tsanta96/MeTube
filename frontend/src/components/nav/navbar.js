import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import VideoUploadContainer from '../videos/video_upload_container';
import '../stylesheets/navbar.css';
import '../stylesheets/sidenav.css';

class NavBar extends React.Component {

    constructor(props){
        super(props)

        this.state = {
          sidenav: false
        }
      
      this.state = { 
        search: this.props.search ? this.props.search : '',
        showModal: false 
      }

      this.search = this.search.bind(this)
      this.logoutUser = this.logoutUser.bind(this);
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);

      this.renderSplash = this.renderSplash.bind(this);
      this.renderProfile = this.renderProfile.bind(this);
      this.renderSubscriptions = this.renderSubscriptions.bind(this);

      this.renderSidenav = this.renderSidenav.bind(this);
      this.toggleSidenav = this.toggleSidenav.bind(this);
      this.closeSidenav = this.closeSidenav.bind(this);

      this.renderTrending = this.renderTrending.bind(this);
    }

    showModal() {
      this.setState({ showModal: true });
    }

    hideModal() {
      this.setState({ showModal: false });
    }
  
    logoutUser(e) {
      e.preventDefault();
      if (this.props.currentUser) {
        this.props.logout()
      } else {
        this.props.history.push('/')
      }
    }

    search(e) {
      e.preventDefault();
      
      // this.props.fetchSearchVideos(this.state.search)
      this.props.history.push('/api/search')
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

    renderProfile(e){
      e.preventDefault();
      this.props.history.push(`/profile/${this.props.currentUser}`)
    }

    renderSubscriptions(e){
      e.preventDefault();
      this.props.history.push('/subscriptions')
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
            {/* <Link to="/api/users/register" className="session-button">
              <i className="fas fa-user-plus"></i> Sign Up
            </Link> */}
          </div>
        );
      }
    }

    renderTrending(e) {
      e.preventDefault();
      this.props.history.push('/videos/trending');
    }

    renderSidenav(){
      // e.preventDefault();
      if (this.state.sidenav) {
        return (
          <div className='sidenav-cont'>
            {/* <p className='sidenav-close' onClick={this.closeSidenav}>&times;</p> */}
            <p onClick={this.renderProfile}><i className="fas fa-home fa-fw"></i> Home</p>
            <p><i className="fas fa-fire fa-fw"></i> Trending</p>
            <p onClick={this.renderSubscriptions}><i className="fas fa-photo-video fa-fw"></i> Subscriptions</p>
            <p onClick={this.renderTrending}><i className="fas fa-fire fa-fw"></i> Trending</p>
            <p><i className="fas fa-photo-video fa-fw"></i> Subscriptions</p>
          </div>
        )
      } else {
        return (
          <div className='min-sidenav-cont'>
            <div className='min-sidenav-icons'>
              <i className="fas fa-home fa-fw" onClick={this.renderProfile}></i><p>Home</p>
            </div>
            <div className='min-sidenav-icons'>
              <i className="fas fa-fire fa-fw" onClick={this.renderTrending}></i><p>Trending</p>
            </div>
            <div className='min-sidenav-icons'>
              <i className="fas fa-photo-video fa-fw" onClick={this.renderSubscriptions}></i><p>Subscriptions</p>
            </div>
          </div>
        )
      }
    }

    closeSidenav(e){
      e.preventDefault();
      this.setState({ sidenav: false })
    }

    toggleSidenav(e) {
      e.preventDefault();
      if (this.state.sidenav) {
        this.setState({ sidenav: false })
      } else {
        this.setState({ sidenav: true });
      }
    }

    render() {
      if (this.props.location.pathname === '/api/users/login' || this.props.location.pathname === '/api/users/register') {
        return (
          <div className='hidden'></div>
        )
      } else {

      return (
        <div>
          <div className="main">
            <i className="fas fa-bars" onClick={this.toggleSidenav}></i>

            <i className="fab fa-youtube-square" onClick={this.renderSplash}></i>
            <p className="youTube-logo-text">MeTube</p>


            <input type="text" className="searchbar" placeholder="Search" onChange={this.updateField('search')} />
            <i className="fas fa-search" onClick={this.search}></i>

          <VideoUploadContainer show={this.state.showModal} hideModal={this.hideModal} />
          <i className="fas fa-video" onClick={this.showModal}></i>
          {this.renderSessionButton()}

          </div>
          <div>{this.renderSidenav()}</div>
        </div>
      );
    }
  }

}


export default withRouter(NavBar);