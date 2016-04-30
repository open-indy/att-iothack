import './styles/intervention.less';
require('es6-promise').polyfill();

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import AppRouter from './src/router/router';
import { Provider } from 'react-redux';

// Store
import configureStore from 'stores/configureStore';
const store = configureStore();

// Localization
document.getElementById( 'page' ).className = "";

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      { AppRouter }
    </Router>
  </Provider>,  document.getElementById( 'page' )
);
