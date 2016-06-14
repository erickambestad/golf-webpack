"use strict";

import React from "react";

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;

    return(
      <div id="home-page" className="container">
        <h1>Home</h1>
        Test Home Page
      </div>
    );
  }
}

export default Home;
