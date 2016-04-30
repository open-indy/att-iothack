require("!style!css!less!./styles/reactjstools.less");

import React from 'react';
import {render} from 'react-dom';
import Router from 'react-router';
import {browserHistory} from 'react-router';
import AppRoutes from './src/router/router';
import Redux from 'redux';
import ReactRedux from 'react-redux';
import configureStore from './src/stores/configureStore';

const store = configureStore();

let Provider = ReactRedux.Provider;
let pageEl = document.getElementById('page');
pageEl.className = '';

render(
	<Provider store={ store }>
		<Router history={ browserHistory } routes={ AppRoutes } />
	</Provider>
, pageEl );
