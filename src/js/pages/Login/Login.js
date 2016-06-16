"use strict";

import React from "react";

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="login-page" className="container">
        <h1>Login</h1>
        <div>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <input type="password" placeholder="password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    );
  }
}

export default Login;
