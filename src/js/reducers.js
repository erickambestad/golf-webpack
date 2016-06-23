'use strict';

import _ from 'lodash';
import { Map } from 'immutable';
import initialState from './initialState';
import {
  ATTEMPTING_LOGIN,
  AWAITING_AUTH_RESPONSE,
  LOGOUT,
  ANONYMOUS,
  LOGIN_USER,
  LOGGED_IN
} from './config';

export default function(state = initialState, action) {
  switch(action.type) {
    case ATTEMPTING_LOGIN:
      return state.setIn(['auth'], Map({
        currently: AWAITING_AUTH_RESPONSE,
        username: "guest",
        uid: null
      }));
    break;
    case LOGOUT:
      return state.setIn(['auth'], Map({
        currently: ANONYMOUS,
        username: "guest",
        uid: null
      }));
    break;
    case LOGIN_USER:
      return state.setIn(['auth'], Map({
        currently: LOGGED_IN,
        username: action.username,
        uid: action.uid
      }));
    break;
    default:
      return state;
  }
};
