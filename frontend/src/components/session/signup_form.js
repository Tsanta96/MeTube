import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../stylesheets/reset.css';
import '../stylesheets/session.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    if (nextProps.signedIn === true && this.props.loginOrSignup === "register") {
      this.props.history.push('/api/users/login');
    } else if (nextProps.currentUser === true) {
      this.props.history.push('/');
    } else {
      this.setState({errors: nextProps.errors})
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSignup(e){
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  handleLogin(e){
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(user);
  }

  loginOrSignup(){
    if (this.props.loginOrSignup === "register") {
      return (
        <form onSubmit={this.handleSignup} className="signup-form">
          <br/>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
              className="session-form-input"
            />
          <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              className="session-form-input"
            />
          <br/>
            <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
              className="session-form-input"
            />
          <br/>
          <input type="submit" value="Submit" className="session-form-submit"/>
          <p className="signup-to-login">Already have an account? <Link to='/api/users/login' className="login-link">Log In</Link></p>
        </form>
      )
    } else {
      return (
        <form onSubmit={this.handleLogin} className="signup-form">
          <br/>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
              className="session-form-input"
            />
          <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              className="session-form-input"
            />
          <br/>
          <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
              className="hidden-session-form-input"
            />
          <br/>
          <input type="submit" value="Submit" className="session-form-submit"/>
          <p className="signup-to-login">Don't have an account? <Link to='/api/users/register' className="login-link">Sign Up</Link></p>
        </form>
      )
    }
  }

  renderErrors() {
    if (Object.keys(this.state.errors).length > 0) {
      return(
        <div className="signup-errors-container">
          <i class="fas fa-exclamation-triangle"></i>
          <ul className="signup-errors">
            {Object.keys(this.state.errors).map((error, i) => (
              <li key={`error-${i}`}>
                {this.state.errors[error]}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return ''
    }
  }

  render() {
    return (
      <div className="signup-form-container">
        <i className="fab fa-youtube"></i>
        <h1 className="signup-header">Sign Up For MeTube!</h1>
        {this.loginOrSignup()}
        {this.renderErrors()} 
        <div className="signup-description-container">
          <div className="signup-description">
            <i class="fas fa-globe-americas"></i>
            <p className="signup-description-text"><span className="signup-span">Connect</span> with the world</p>
          </div>
          <div className="signup-description">
            <i class="fas fa-users"></i>
            <p className="signup-description-text"><span className="signup-span">See</span> what your friends are doing</p>
          </div>
          <div className="signup-description">
            <i class="fas fa-video"></i>
            <p className="signup-description-text"><span className="signup-span">Share</span> your life</p>
          </div>
        </div>
        <video controls height="200" width="320" className="signup-video">
          <source src='https://www.youtube.com/watch?v=KydJ-Nog5Fc'></source>
        </video>
      </div>
    );
  }
}

export default withRouter(SignupForm);