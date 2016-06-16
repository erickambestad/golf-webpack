'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { FIREBASE } from './config';
import store from './store';
import { startListeningToAuth } from './actions';

// Pages
import Template from './pages/Template/Template';
import Home from './pages/Home/Home-container';
import Login from './pages/Login/Login';

function requireAccess() {
  var auth = FIREBASE.auth().currentUser;
  if (auth) {
    return true;
  } else {
     browserHistory.push('/login')
  }
}

render((
  <Provider store={store}>
    <Router history={browserHistory}>
			<Route component={Template}>
				<Route path="/" component={Home}  onEnter={requireAccess()}/>
				<Route path="/login" component={Login}/>
			</Route>
    </Router>
  </Provider>
), document.getElementById('app'));

// setTimeout(() => {
//   store.dispatch( startListeningToAuth() );
// });
