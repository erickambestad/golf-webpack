"use strict";

import React from "react";
import { attemptLogin } from '../../actions'

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login() {
    let email = this.refs.email.value,
      password = this.refs.password.value;
      
    attemptLogin(email, password);
  }

  render() {
    return(
      <div id="login-page" className="container">
        <h1>Login</h1>
        <div>
          <input type="text" ref="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" ref="password" placeholder="password" />
        </div>
        <div>
          <button type="submit" onClick={this.login}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Login;
