"use strict";

import React from "react";
import { browserHistory } from 'react-router';
import _ from 'lodash';
import { FIREBASE } from '../../config';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    let {
      attemptLogin
    } = this.props;
    let email = this.refs.email.value,
      password = this.refs.password.value;
    attemptLogin(email, password)
  }

  render() {

    let {
      auth,
      logoutUser
    } = this.props;

    let loggedIn = auth && auth.get('uid');
    let login = (!loggedIn) ? (
      <div>
        <h3>Log in</h3>
        <div>
          <input type="text" ref="email" placeholder="Email Address" />
        </div>
        <div>
          <input type="password" ref="password" placeholder="Password" />
        </div>
        <div>
          <button onClick={this.login}>Login</button>
        </div>
      </div>
    ) : null;

    let dashboard = (loggedIn) ? (
      <p>LOGGED IN..</p>
    ) : null;

    return(
      <div id="home-page" className="container">
        <h1>Home</h1>
        {login}
        {dashboard}
      </div>
    );
  }
}

export default Home;
