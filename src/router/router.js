import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../app';
import Main from '../components/main';

const RJSTRoutes = (
  <Route path="/" component={ RJSTApp }>
    <IndexRoute component={ Main } />
    <Route path="/home" component={ Main } />
  </Route>
);

module.exports = RJSTRoutes;
