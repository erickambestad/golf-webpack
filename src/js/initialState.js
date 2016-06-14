'use strict';

import { Map, List } from 'immutable';
let C = require("../constants");

module.exports = Map({
  auth: Map({
    currently: C.ANONYMOUS,
    username: null,
    uid: null
  }),
	picks: List(),
	tournaments: List()
});
