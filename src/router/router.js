import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../app';
import Main from '../components/main';
import CreateCampaignContainer from '../containers/campaign/new/';

const AppRoutes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Main } />
    <Route path="/home" component={ Main } />
    <Route path="/campaign/new" component={ CreateCampaignContainer } />
  </Route>
);

module.exports = AppRoutes;
