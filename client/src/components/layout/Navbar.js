import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {

    //logoutClick
    logoutClick = (event) => {
        event.preventDefault();
        this.props.logoutUser();
    }//logoutClick

    render() {

        const { isAuthenticated, user } = this.props.auth;

        return (<div className="navbar-fixed">
        <nav className="blue darken-2">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">DevBlog</Link>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Developers</Link></li>
                        { !isAuthenticated ? <li><Link to="/register">Sign Up</Link></li> : null }
                        { !isAuthenticated ? <li><Link to="/login">Login</Link></li> : null }
                        { isAuthenticated 
                            ? <li>
                                <a onClick={this.logoutClick}>
                                    <img src={user.avatar} alt={user.name} className="circle user-avatar" />
                                    <span style={{marginLeft:'5px'}}>Logout</span>
                                </a>
                                </li> 
                            : null }
                    </ul>
                </div>
            </div>
        </nav></div>)
    }
}

const mapStateToProps = (state) => ({
    auth:state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
