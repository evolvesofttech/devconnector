import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    //onChange
    onChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }//onChange

    //onSubmit
    onSubmit = (event) => {
        event.preventDefault();
        alert("Submitted");
    }//onSubmit

    render() {

        const { email, password } = this.state;

        return (<div className="row">
        <div className="col s12 m6 offset-m3">
            <div className="card register-card">
                <div className="card-content">
                    <span className="card-title">Login</span>
                    <p className="text-center">Login to write posts</p>
                    <form className="row" onSubmit={this.onSubmit}>

                        <div className="input-field col s12">
                            <input 
                                placeholder="Email" 
                                type="email" 
                                name="email"
                                value={email}
                                onChange={this.onChange}
                                className="validate" />
                        </div>

                        <div className="input-field col s12">
                            <input 
                                placeholder="Password" 
                                type="password" 
                                name="password"
                                value={password}
                                onChange={this.onChange}
                                className="validate" />
                        </div>

                        <div className="input-field col s12 text-center">
                            <button 
                                type="submit" 
                                className="waves-effect waves-light btn green">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>)
    }
}
