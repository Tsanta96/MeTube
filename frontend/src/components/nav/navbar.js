import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props){
        super(props)
    }
  

    render() {

      if (this.props.loggedIn) {

      return (
        <div>

        </div>
      )
    } else {
      return (
        <div>
          
        </div>
      )
    }
    }

}

export default NavBar;