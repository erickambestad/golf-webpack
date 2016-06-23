'use strict';

import { Map, List } from 'immutable';
let {
  ANONYMOUS
} = require("./config");

module.exports = Map({
  auth: Map({
    currently: ANONYMOUS,
    username: null,
    uid: null
  }),
	picks: List(),
	tournaments: List()
});
