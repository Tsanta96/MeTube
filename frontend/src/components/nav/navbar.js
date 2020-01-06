import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props){
        super(props)

      this.renderSessionButton = this.renderSessionButton.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
    }
  
    logoutUser(e) {
      e.preventDefault();
      this.props.logout();
    }

    handleUpload(e){
        e.preventDefault()
        this.props.history.push("/videos")
    }

    renderSessionButton() {
      if (this.props.loggedIn) {
        return (
          <div className="">
            <button onClick={this.logoutUser}>Sign Out</button>
          </div>
        )
      } else {
        return (
          <div>
            <Link to='/login'>Sign In</Link>
          </div>
        )
      }
    }

    render() {
      return (
        <div className="main">
          <div className="left">
            <i class="fab fa-youtube-square"></i>
          </div>

          <div className="center">{/* Search bar will be here */}</div>

          <div className="right">
            <i class="fas fa-video" onClick={this.handleUpload}></i>
            {this.renderSessionButton}
          </div>
        </div>
      );
    }

}


export default NavBar;