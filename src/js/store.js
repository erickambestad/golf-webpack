'use strict';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
const logger = createLogger();

// Import reducers
import allreducers from './reducers';

// All reducers
var reducers = combineReducers({
    allreducers
});

// Create the site's store
var store = createStore(
    reducers,
    {},
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() function
      logger,
    )
);

export default store;
