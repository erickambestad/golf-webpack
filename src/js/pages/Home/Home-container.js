'use strict';

import React from 'react';
import { connect } from 'react-redux';

// Page component to bind props and dispatchers to
import Home from './Home';

//Component actions
import {
  attemptLogin,
  logoutUser
} from '../../actions'

const mapStateToProps = (state) => {
  const reducer = state.allreducers;
  return {
    auth: reducer.get('auth')
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    attemptLogin: (email, password) => {
      dispatch(attemptLogin(email, password))
    },
    logoutUser: () => {
      dispatch(logoutUser())
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
