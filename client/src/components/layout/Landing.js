import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing" style={{background:'url(images/landing.jpg) center center no-repeat/cover'}}>
        <h1 className="landing-h1">
            Developer's Blog
        </h1>
        <p className="flow-text landing-paragraph">
            Create a developer profile/portfolio, share posts and get help from other developers
        </p>

        <div className="landing-buttons">
            <Link to="/register" className="waves-effect waves-light btn green">Sign Up</Link>
            <Link to="/login" className="waves-effect waves-light btn white btn-login">Login</Link>
        </div>
      </div>
    )
  }
}
