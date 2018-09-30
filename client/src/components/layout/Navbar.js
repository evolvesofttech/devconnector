import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (<div className="navbar-fixed">
        <nav className="blue darken-2">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Developer's Blog</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="">Developers</a></li>
                        <li><a href="sass.html">Sign Up</a></li>
                        <li><a href="badges.html">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav></div>)
    }
}
