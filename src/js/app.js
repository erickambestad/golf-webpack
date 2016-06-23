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

render((
  <Provider store={store}>
    <Router history={browserHistory}>
			<Route component={Template}>
				<Route path="/" component={Home} />
			</Route>
    </Router>
  </Provider>
), document.getElementById('app'));

setTimeout(() => {
  store.dispatch( startListeningToAuth() );
});
