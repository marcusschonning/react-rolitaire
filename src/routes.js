import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { AppComponent, StartScreenComponent } from './components';
import { GameBoardContainer } from './containers';


const Routes = () =>(
  <Router history={browserHistory}>
    <Route component={AppComponent}>
      <Route path="/" component={StartScreenComponent} />
      <Route path="/game" component={GameBoardContainer} />
    </Route>
  </Router>
)

export default Routes;
