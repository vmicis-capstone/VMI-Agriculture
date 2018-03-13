'use strict';

import App from './common/components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// CSS
require('normalize.css');
require('./styles/main.css');
require('../node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css');
require('../node_modules/react-tabs/style/react-tabs.css');

var content = document.getElementById('content');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
), content);
