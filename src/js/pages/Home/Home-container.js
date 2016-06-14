'use strict';

import React from 'react';
import { connect } from 'react-redux';

// Page component to bind props and dispatchers to
import Home from './Home';

// Component actions
// import {
// } from './Home-actions'

const mapStateToProps = (state) => {
  const sectionState = state.HomeReducer;
  return {
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
