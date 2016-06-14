"use strict";

import React from "react";

class Template extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let {
      params,
      children
    } = this.props;

    return(
      <div id="fantasyGawlf">
          {children}
      </div>
    )
  }
}

export default Template;
